import { getField, updateField } from 'vuex-map-fields';
import { fetchingCategoriesBySlugData } from '../../../graphQl/queries/categories/fetchingCategoriesBySlugData';
const state = () => ({
    categoriesWithSlugData: [],
    postCategories: [],
    isLoading: false,

})

const actions = {

    async fetchingPostCateogoriesBySlugData({ commit, dispatch, rootGetters }, params) {
        commit("setIsLoading", true)
        try {
            const { data } = await $nuxt.$apollo.query({
                query: fetchingCategoriesBySlugData,
                variables: {
                    slug: params.slug
                },
                fetchPolicy: "network-only",

            });
            commit("setcategoriesWithSlugData", data)
            commit("setIsLoading", false)
            // DeStructuring the PostArray from data.category
            const postArray = data?.category?.[0].post_category?.map((item) => (item.post) || []);
            // console.log("postArray", postArray)

            commit("setPostCategories", postArray)
        }
        catch (error) {
            console.log(error)
            commit("setIsLoading", true)
        }
    }


}

const mutations = {
    setIsLoading(state, payload) {
        state.isPostsLoading = payload
    },
    setcategoriesWithSlugData(state, list) {
        state.categoriesWithSlugData = list
    },
    setPostCategories(state, list) {
        state.postCategories = list
    }
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