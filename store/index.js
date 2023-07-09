import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from './modules/auth';
import postModule from "./modules/post";
import postCategoriesModule from "./modules/post_categories";
import postCommentsModule from "./modules/post_comments";
import postMetaDataModule from "./modules/post_meta_data";
import postTagsModule from "./modules/post_tags";
import chapters from "./modules/chapters";

Vue.use(Vuex);

const store = () => new Vuex.Store({
    modules: {
        'auth': AuthModule,
        'post': postModule,
        'post_categories': postCategoriesModule,
        'post_comments': postCommentsModule,
        'post_meta_data': postMetaDataModule,
        'post_tags': postTagsModule,
        'chapters': chapters,
    },
    state: {},
    actions: {
        async nuxtServerInit({ dispatch, commit, state, rootGetters }, { req }) {
            console.log("Store Server Side nuxtInit action fired");
        }
    },
    mutations: {},
    getters: {},
});

export const strict = false;
export default store;
