import gql from 'graphql-tag';
import { FETCH_CHAPTER } from '~/graphQl/queries/chapters/fetchChapters';
import { fetchChapters } from '~/graphQl/queries/chapters/fetchChapters';
import { fetchChaptersBySlug } from '~/graphQl/queries/chapters/fetchChaptersBySlug';
import { fetchChaptersByPostId } from '~/graphQl/queries/chapters/fetchChaptersByPostId';
import { FETCH_CHAPTER_BY_POST_ID } from '~/graphQl/queries/chapters/fetchChaptersByPostId';
import { FETCH_BY_CHAPTER_BY_SLUG } from '~/graphQl/queries/chapters/fetchChaptersBySlug';

const state = () => ({
    allChapters: [],
    chapterWithPostId: [],
    // postChapters: [],
    chapterSlugData: null,
})

const actions = {

    // fetching All Chapter
    async fetchingAllChapters({ commit, dispatch, rootGetters }, params) {

        try {
            const { data } = await $nuxt.$apollo.query({
                // query: fetchChapters,
                query: FETCH_CHAPTER,
                fetchPolicy: "network-only",
            });
            commit("setChapter", data)
            // const postIdchapters = data;
            // const chaptersWithPostId = postIdchapters.chapter_number.map(chapter => ({
            //     text: `Chapter No ${chapter.number_of_chapter}`,
            //     value: chapter.number_of_chapter,
            //     slug: chapter.slug,
            //     to: `/chapter/${chapter.slug}`,
            //     post_id: chapter.post_id,
            // }));
            // commit("setPostChapters", chaptersWithPostId)


        }
        catch (error) {
            console.log(error)
        }

    },

    //   fetching Chapter with Slug Data
    async fetchingChapterSlugData({ commit, dispatch, rootGetters }, params) {
        try {
            const { data } = await $nuxt.$apollo.query({
                // query: fetchChaptersBySlug,
                query: FETCH_BY_CHAPTER_BY_SLUG,
                variables: { slug: params.slug },
                fetchPolicy: "network-only",
            });
            commit("setChapterSlug", data.chapter_number)
            // console.log(JSON.stringify("fetchingChapterSlugData", data.chapter_number))
        }
        catch (error) {
            console.log("fetchingChapterSlugData", error)
        }

    },
    //   fetching Chapter with post_id
    async fetchingChapterWithPostId({ commit, dispatch, rootGetters }, params) {
        //  the error is getting from here 
        // const chapterWithPostID = state.allChapters.chapter_number.post_id;
        // const get_post_id = state.postChapters.find(chapter => chapter.post_id === chapterWithPostID);
        // console.log(JSON.stringify(get_post_id))
        try {
            const { data } = await $nuxt.$apollo.query({
                // query: fetchChaptersByPostId,
                query: FETCH_CHAPTER_BY_POST_ID,
                variables: {
                    post_id: params.post_id
                },
                fetchPolicy: "network-only",
            });
            commit("setChapterWithPostId", data.chapter_number)
            // console.log("setChapterWithPostId", JSON.stringify(data))
        }
        catch (error) {
            console.log("fetchingChapterWithPostId", error)
        }
    }

}
const mutations = {
    setChapter(state, list) {
        state.allChapters = list;
    },

    setChapterSlug(state, chapter_number) {
        state.chapterSlugData = chapter_number
    },
    setChapterWithPostId(state, list) {
        state.chapterWithPostId = list;
    }

}
const getters = {


}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}