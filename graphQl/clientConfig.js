import { ApolloLink, Observable, concat, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { onError } from 'apollo-link-error'
import 'subscriptions-transport-ws' // this is the default of apollo-link-ws


export default (ctx) => {
    const httpLink = new HttpLink({ uri: 'https://ytfwlcpjffnmoduprcvd.hasura.ap-south-1.nhost.run/v1/graphql' })

    //Error handling
    const errorLink = onError(({
        graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors && graphQLErrors[0].message === 'Unauthorized') {
            // refresh JWT token call will go here

        }
        graphQLErrors.map(({ message, locations, path }) => {
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        })
        if (networkError) {
            console.log(`netWork error ${networkError}`)
        }
    });
    // Auth Middleware for Authorization Header
    const authMiddleware = new ApolloLink((operation, forward) => {
        // const useToken = ctx.store.state.auth.useTokenInRequest;
        // const token = process.browser ? ctx.store.state.auth.idToken : ctx.req.session;
        const token = process.browser ? ctx.store.state.auth.idToken : ctx.req.session
        const useTokenInRequestMiddleware = ctx.store.state.auth.useTokenInRequest;
        if (token && useTokenInRequestMiddleware) {
            operation.setContext({
                headers: {
                    Authorization: token ? `Bearer ${token}` : null,
                    HASURA_GRAPHQL_UNAUTHORIZED_ROLE: `public`

                }
            })
        }
        operation.setContext({

        })
        return forward(operation)
    });
    const wsLink = process.browser ? new WebSocketLink({
        uri: `wss://ytfwlcpjffnmoduprcvd.hasura.ap-south-1.nhost.run/v1/graphql`,
        options: {
            lazy: true,
            reconnect: true,
            connectionParams: () => {
                const useToken = ctx.store.state.auth.useTokenInRequest;
                const token = process.browser ? ctx.store.state.auth.idToken : ctx.req.session;

                if (useToken, token) {
                    return {
                        headers: {
                            Authorization: token ? `Bearer${token}` : null,
                            HASURA_GRAPHQL_UNAUTHORIZED_ROLE: `public`
                        }
                    }
                }
            }
        }
    }) : null
    const link = process.browser ? split(
        ({ query }) => {
            const { kind, operation } = getMainDefinition(query)
            return kind === 'OperationDefinition' && operation === 'subscription'
        },
        wsLink,
        httpLink
    ) : httpLink

    return {
        link: concat(authMiddleware, link, errorLink),
        cache: new InMemoryCache(),
        connectToDevTools: true,
        ctx
    }
}