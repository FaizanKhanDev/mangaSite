import { FETCH_USERS_BY_EMAIL } from "../queries/user/fetchUserByEmail";
export default {
    async fetchUserByEmailWithUserCount(count) {
        const response = await $nuxt.$apollo.query({
            query: FETCH_USERS_BY_EMAIL,
            variables: params,
            fetchPolicy: 'network-only'
        });
        let data = { data: response.data }
        return data
    }
}