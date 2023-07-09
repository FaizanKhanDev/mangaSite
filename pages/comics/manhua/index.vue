<template>
    <b-container>
        <b-row class="posts-row">
            <b-col cols="12" lg="9">
                <b-row>
                    <b-col cols="12" lg="12" class="mt-4">
                        <b-row class="popular-row">
                            <b-col cols="12" class="popular-today">
                                <h5 class="white--text m-0">Manga List</h5>

                            </b-col>
                            <b-col cols="12">
                                <SearchHeader />
                            </b-col>
                            <!-- popular Posts -->
                            <template v-if="posts">
                                <PopularPost v-for="(post, i) in setPostsType.post" :postSlugUrl="post.slug"
                                    :chapterTitle="post.title" :type="post.type" :key="i" />
                                <!-- :image="post.image" -->
                                <!-- :chapterNumber="post.chapter" :key="i" -->
                            </template>

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
                </b-row>
                <b-col class="free-height-for-slug">

                </b-col>
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
import SearchHeader from "@/components/posts/postdetail/searchingheader/SearchHeader.vue";
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'IndexPage',
    components: {
        PopularPost,
        Sidebar,
        SearchHeader,
    },
    inject: {
        theme: {
            default: { isDark: false },
        },
    },
    computed: {

    },
    methods: {

    },
    data() {
        return {


        }
    },
    mounted() {
        this.loadAllPostData()

    },
    computed: {
        ...mapState("post", ["posts", "isPostsLoading", "setPostsType"])
    },
    methods: {
        ...mapActions("post", ["allPostsData", "fetchingPostsByTypes"]),
        async loadAllPostData() {
            this.allPostsData()
            await this.fetchingPostsByTypes()

        }
    }
}
</script>
<style scoped></style>