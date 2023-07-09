import { getField, updateField } from 'vuex-map-fields'
const state = () => ({
    /// deal and Promotion wala Form 1 jesay hain 
    /// this is used for deals and Promotion Component

})

const actions = {
    // init form data
    async initForm({ commit, state, rootGetters, dispatch }, params) {
        // TODO: When form is called to reload data
    },

    // handle next submit
    async saveForm({ commit, state, rootGetters, dispatch }) {
        // TODO: Save form on database
    },

}

const mutations = {

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