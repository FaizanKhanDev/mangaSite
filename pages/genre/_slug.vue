<template>
    <b-container>
        <b-row class="posts-row">
            <b-col cols="12" lg="9">
                <!-- <Carousel /> -->
                <b-row>
                    <b-col cols="12" lg="12" class="mt-4">
                        <b-row class="popular-row">
                            <b-col cols="12" class="popular-today">
                                <h5 v-for="( categoryTitle, i) in categoriesWithSlugData.category" :key="i"
                                    class="white--text m-0">
                                    {{ categoryTitle.title }}
                                </h5>
                            </b-col>
                            <!-- popular Posts -->
                            <PopularPost v-for="(post, i) in postCategories" :key="i" :chapterTitle="post.title"
                                :postSlugUrl="post.slug" :chapterNumber="post.chapterNumber" :type="post.type" />
                            <template v-if="isPostsLoading">
                                <v-row class="p-5">
                                    <v-col cols="12" md="4" v-for="i in 10" :key="i">
                                        <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                                            <v-skeleton-loader
                                                type="card-avatar,title,title, subtitle, text"></v-skeleton-loader>
                                        </v-sheet>
                                    </v-col>
                                </v-row>
                            </template>
                            <!-- popular Posts -->
                        </b-row>
                    </b-col>
                    <b-col class="free-height-for-slug">

                    </b-col>

                </b-row>
            </b-col>
            <b-col cols="12" lg="3">
                <Sidebar />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import PopularPost from "@/components/posts/popularposts/PopularPost.vue";
import Sidebar from "@/components/posts/sidebar/Sidebar.vue";

import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';
export default {
    name: 'IndexPage',
    components: {
        PopularPost,
        Sidebar,
    },
    inject: {
        theme: {
            default: { isDark: false },
        },
    },
    data() {
        return {

        }
    },
    mounted() {
        this.loadAllPostData()
    },
    computed: {
        ...mapState("post_categories", ["categoriesWithSlugData", "postCategories", "isPostsLoading"])
    },
    methods: {
        ...mapActions("post_categories", ["fetchingPostCateogoriesBySlugData"]),
        async loadAllPostData() {
            const slug = this.$route.params.slug;
            await this.fetchingPostCateogoriesBySlugData({ slug })
        },
    }
}
</script>
<style scoped></style>