import { getField, updateField } from 'vuex-map-fields'
import gql from 'graphql-tag';
// import { fetchingPostData } from '../../../graphQl/queries/post/fetchPost';
// import { fetchingPostsbyLatestPostsSlug } from '../../../graphQl/queries/post/fetchingPostsbyLatestPostsSlug/fetchingPostsbyLatestPostsSlug';
import { FETCH_POST_WITH_SLUG } from '~/graphQl/queries/post/fetchingPostsbyLatestPostsSlug/fetchingPostsbyLatestPostsSlug';
// import { fetchChapters } from '../../../graphQl/queries/chapters/fetchChapters';
// import { fetchPostsByTypes } from '../../../graphQl/queries/post/fetchPostsByTypes/fetchPostsByTypes';
import { FETCH_ALL_POST_DATA } from '~/graphQl/queries/post/fetchPost.js';
import { FETCH_POST_BY_TYPE } from '~/graphQl/queries/post/fetchPostsByTypes/fetchPostsByTypes';
// const PostRepositories = Repository.get('post');

const state = () => ({
    /// deal and Promotion wala Form 1 jesay hain 
    /// this is used for deals and Promotion Component
    posts: [],
    setPostsType: [],
    isPostsLoading: false,
    postSlugData: null,


})

const actions = {
    // init Comic Post data
    async allPostsData({ commit, dispatch, rootGetters }, params) {
        commit("setPostLoading", true);
        try {
            const { data } = await $nuxt.$apollo.query({
                // query: fetchingPostData,
                query: FETCH_ALL_POST_DATA,
                fetchPolicy: "network-only",
            });
            commit("setPostLoading", false);
            commit("getPostData", data)

        } catch (error) {
            console.error("Error fetching data:", error);
            commit("setPostLoading", true);
        }
    },
    //  fetching Latest Post By Slug data and chapter without Slug
    async fetchingLatestPostBySlug({ commit, dispatch, rootGetters }, params) {
        try {
            const { data } = await $nuxt.$apollo.query({
                // query: fetchingPostsbyLatestPostsSlug,
                query: FETCH_POST_WITH_SLUG,
                variables: { slug: params.slug },
                fetchPolicy: "network-only",
            });
            // console.log(JSON.stringify(data))
            commit("setPostSlugData", data.post)

        }
        catch (error) {
            console.log(" Error is generating From here fetchingLatestPostBySlug", error)
        }
    },

    //  fetching Post By Type data  
    async fetchingPostsByTypes({ commit, dispatch, rootGetters }, params) {
        try {
            const urlPath = $nuxt.$route.path;
            const segments = urlPath.split('/')
            const type = segments[segments.length - 1]
            const { data } = await $nuxt.$apollo.query({
                // query: fetchPostsByTypes,
                query: FETCH_POST_BY_TYPE,
                variables: {
                    type: type || params.type,
                },
                fetchPolicy: 'network-only',
            });
            commit('getPostsType', data);
            // console.log(JSON.stringify(data));
        } catch (error) {
            console.log('fetchingPostsByTypes', error);
        }
    },


}

const mutations = {
    getPostData(state, list) {
        state.posts = list;
    },
    getPostsType(state, list) {
        state.setPostsType = list;
    },

    setPostLoading(state, payload) {
        state.isPostsLoading = payload
    },
    setPostSlugData(state, post) {
        state.postSlugData = post;
    },



}
const getters = {
    // vuex-map-fields -> getters
    getField,


}



export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
} 