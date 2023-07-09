import { includes } from 'lodash';
// import Repository from "~/graphql/repositories/RepositoryFactory.js";
import Repository from '../../../graphQl/repositories/RepositoryFactory';
// import RepositoryFactory from '../../../graphQl/repositories/RepositoryFactory';
// const AuthRepository = RepositoryFactory.get('auth');
const AuthRepository = Repository.get('auth');

import { getField, updateField } from 'vuex-map-fields'
// authentication store module
/**
 * Sign In logic
 * Sign Up
 */

const state = () => ({
    user: null,
    idToken: null,
    refreshToken: null,
    errors: "has error",
    claims: null,
    loading: false,
    isSignUpDisabled: true,
    isSignInDisabled: true,
    useTokenInRequest: true,
    authUserProfile: null,
    userProfile: null,
    lastSignInTime: null,
    createdAt: null,
    createdAuthUser: null,
    createdAuthUserLoading: false,
})

// actions part
const actions = {

    // Create Admin User with company-
    // async registerUserWithCompany(context, payload) {
    //     context.dispatch('setAuthorizationTokenInUseForGraphQLRequest', false);
    //     // create user on firebase auth
    //     context.commit('SET_LOADING', true);
    //     context.commit('SET_SIGNUP_DISABLED', true);
    //     this.$fire
    //         .auth
    //         .createUserWithEmailAndPassword(payload.email, payload.password)
    //         .then(async (authUser) => {
    //             // get auth userid
    //             const uid = authUser.user.uid;
    //             const createUserWithCompanyParams = {
    //                 "companyname": payload.companyName,
    //                 "contactname": payload.contactName,
    //                 "isowner": true,
    //                 "email": payload.email,
    //                 "uid": uid
    //             };
    //             // mutation gql to create user and company
    //             $nuxt.$apollo.mutate({
    //                 mutation: CREATE_USER_WITH_COMPANY,
    //                 variables: createUserWithCompanyParams,
    //                 fetchPolicy: "no-cache",
    //                 context: {
    //                     headers: {
    //                         HASURA_GRAPHQL_UNAUTHORIZED_ROLE: `anonymous`
    //                     }
    //                 }
    //             }).then(({ data }) => {
    //                 const companyId = data.insert_company_one.company_id;
    //                 const companyUserRoleId = data.insert_company_one.company_users[0].company_users_id;
    //                 const updateCompanyUserRoleParams = {
    //                     "company_user_role_id": companyUserRoleId,
    //                     "role_id": 1
    //                 };
    //                 // set company id and claims to firebase auth using cloud function
    //                 $nuxt.$apollo.mutate({
    //                     mutation: UPDATE_COMPANY_USER_ROLE,
    //                     variables: updateCompanyUserRoleParams,
    //                     fetchPolicy: "no-cache",
    //                     context: {
    //                         headers: {
    //                             HASURA_GRAPHQL_UNAUTHORIZED_ROLE: `anonymous`
    //                         }
    //                     }
    //                 }).then(({ data }) => {
    //                     // TODO: Call cloud function to set company id and claims
    //                     var setCompanyIdAndClaims = this.$fire
    //                         .functions
    //                         .httpsCallable('setCompanyIdAndClaims');
    //                     // Callback function to set company id and claims
    //                     setCompanyIdAndClaims({
    //                         uid: uid.toString(),
    //                         companyId: companyId.toString(),
    //                         defaultRole: "admin",
    //                         allowedRoles: ["admin", "user"]
    //                     }).then((result) => {
    //                         alert("Company id and claims set successfully on firebase auth", JSON.stringify(result));

    //                         context.dispatch('setAuthorizationTokenInUseForGraphQLRequest', true);

    //                         this.$fire.auth.signOut();
    //                         context.commit('SET_LOADING', false);
    //                         context.commit('SET_SIGNUP_DISABLED', false);
    //                         // redirect user to sign in
    //                         // this.$router.push('/signin');
    //                     }).catch((error) => {
    //                         console.log(error);
    //                     });
    //                 }).catch((error) => {
    //                     console.log(error);
    //                 });
    //                 // logout created user
    //             }).catch(error => {
    //                 // context.commit("SET_ERROR", { message: error.message });
    //                 console.error(error);
    //                 alert("Company and User Failed");
    //                 // this.$fire.auth.signOut();
    //                 context.commit('SET_LOADING', false);
    //                 context.commit('SET_SIGNUP_DISABLED', false);
    //             });
    //         })
    //         .catch(async (error) => {
    //             console.error(error);
    //             // context.commit("SET_ERROR", { message: error.message });
    //             context.commit('SET_LOADING', false);
    //             context.commit('SET_SIGNUP_DISABLED', false);
    //         });
    // },


    // Set authenticated user custom claims in store state
    // async setUserCustomClaims(context, claims) {
    //     // console.log("setClaims fires in store");
    //     // console.log(claims);
    //     // context.commit("SET_CLAIMS", claims);
    //     // localStorage.setItem("claims", JSON.stringify(state.claims));
    //     var setUserCustomClaims = this.$fire
    //         .functions
    //         .httpsCallable('setUserCustomClaims');
    //     // Callback function to update userCustomClaims
    //     return setUserCustomClaims(claims);
    // },

    // set authorization token use for gql header
    // async setAuthorizationTokenInUseForGraphQLRequest(context, status) {
    //     context.commit("SET_AUTHORIZATION_TOKEN_USE_FOR_GRAPHQL_REQUEST", status);
    // },

    // check email address is not taken on firebase auth

    async isEmailUserExist({ rootGetters, state, commit, dispatch }, params) {
        let account = {
            auth: false,
            authAccount: {},
            dbUser: false,
            dbAccount: {}
        };
        // check first in firestore collection
        // const querySnapshot = await this.$fire.firestore.collection("users").where("email", '==', params.email).get();
        // const users = [];
        // if (querySnapshot.size > 0) {
        //     for (const doc of querySnapshot.docs) {
        //         users.push({
        //             id: doc.id,
        //             auth: true,
        //             ...doc.data()
        //         })
        //     }
        //     // let userInFb = {id: }
        //     if (users.length > 0) {
        //         account.auth = true;
        //         account.authAccount = {
        //             id: users[0].id,
        //             displayName: users[0].displayName,
        //             photoURL: users[0].photoURL,
        //             email: users[0].email,
        //             role: users[0].role,
        //         };
        //     }
        // }
        // // check then in Hasura graphql
        const { data } = await AuthRepository.fetchUserByEmailWithUserCount({ email: params.email });
        if (data.list_aggregate.totalCount.totals > 0) {
            account.dbUser = true;
            account.dbAccount = {
                id: data.list[0].uid,
                email: data.list[0].email,
                displayName: data.list[0].firstname + " " + data.list[0].lastname,
                photoURL: data.list[0].photourl,
            };
        }
        return { data: account };
    },



}

// mutations part
const mutations = {
    // create auth user loading
    SET_NEW_AUTH_USER_LOADING(state, payload) {
        state.createdAuthUserLoading = payload;
    },
    // newly created auth user state
    SET_NEW_AUTH_USER(state, payload) {
        state.createdAuthUser = payload;
    },
    SET_AUTHORIZATION_TOKEN_USE_FOR_GRAPHQL_REQUEST(state, payload) {
        state.useTokenInRequest = payload;
    },
    SET_SIGNUP_DISABLED(state, payload) {
        state.isSignUpDisabled = payload;
    },
    SET_SIGNIN_DISABLED(state, payload) {
        state.isSignInDisabled = payload;
    },
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
    SET_CLAIMS(state, claims) {
        // console.log("USER AUTH CLAIMS SER ", claims);
        state.claims = claims;
    },
    SET_ERROR(state, error) {
        state.errors = error;
    },
    SET_LOGGED_IN_USER_PROFILE(state, payload) {
        // console.log("USER DATABASE PROFILE IN STATE", JSON.stringify(payload));
        state.userProfile = payload
    },
    SET_AUTH_USER_PROFILE(state, payload) {
        // console.log("SET USER AUTH PROFILE IN STATE", JSON.stringify(payload));
        state.user = payload
    },
    SET_ID_TOKEN(state, payload) {
        // console.log("TOKEN PAYLOAD: ", JSON.stringify(payload));
        state.idToken = payload;
    },
    SET_REFRESH_TOKEN(state, payload) {
        // console.log("TOKEN REFRESH PAYLOAD: ", JSON.stringify(payload));
        state.refreshToken = payload;
    },
    SET_LAST_SIGN_IN_TIME(state, payload) {
        // console.log("LAST SIGN IN TIME: ", JSON.stringify(payload));
        state.lastSignInTime = payload;
    },
    SET_LOGOUT(state) {
        state.user = null;
        state.idToken = null;
        state.errors = null;
        state.claims = null;
        state.loading = false;
        state.isSignUpDisabled = false;
        state.isSignInDisabled = false;
        state.useTokenInRequest = true;
    },
}
// getters part
const getters = {
    getUserId: function (state) {
        let userId = '';
        if (state.claims['x-hasura-user-id'] !== null && state.claims['x-hasura-user-id'] !== undefined) {
            userId = state.claims['x-hasura-user-id'];

        }
        // if (state.claims && state.claims['x-hasura-user-id']) {
        //     userId = state.claims['x-hasura-user-id'];
        // }
        else {
            userId = state.user.uid;
        }
        // console.log("getter getUserId:", userId);
        return userId;
    },
    getCompanyId: state => state.claims['x-hasura-company-id'],
    getUserRoles: function (state) {
        return state.claims['x-hasura-allowed-roles'];
    },
    getUserDefaultRole: function (state) {
        return state.claims['x-hasura-default-role'];
    },
    isUseTokenInApolloRequestMiddleware: state => state.useTokenInRequest,
    isSignUpDisabled: state => state.signUpDisabled,
    isSignInDisabled: state => state.signInDisabled,
    getUser: function (state) {
        let _getUser = { uid: null, displayName: '', photoURL: '', email: '', phoneNumber: '' };
        _getUser.uid = state.user.uid;
        _getUser.displayName = state.user.displayName;
        _getUser.photoURL = state.user.photoURL;
        _getUser.email = state.user.email;
        _getUser.phoneNumber = state.user.phoneNumber;
        return _getUser;
    },
    getUserProfile: state => state.userProfile,
    errors: state => state.errors,
    loading: state => state.loading,
    getAccessToken(state) {
        return state.idToken;
    },
    getAuthorizationHeaders(state) {
        const headers = `Bearer ${state.idToken}`;
        return headers;
    },
    getXHasuraRoleHeader(state) {
        const headers = `user`;
        return headers;
    },
    getHasuraClaims(state) {
        return state.claims;
    },
    // getUserAvatar(state) {
    //     if (state.user != null && state.user.photoURL != null) {
    //         return state.user.photoURL;
    //     } else {
    //         return require("@/assets/images/avatar.png");
    //     }
    // },
    getLoggedInChatUser(state) {
        let _userLoggedInToChat = {};
        if (state.userProfile !== null) {
            _userLoggedInToChat = state.userProfile;
        }
        return _userLoggedInToChat;
    },
    getField,

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}