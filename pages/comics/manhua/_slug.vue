<template>
    <b-container class="home-main-container">
        <b-row class="posts-row">
            <b-col cols="12" lg="9">
                <b-row>
                    <template v-if="isPostsLoading">
                        <v-col cols="12" md="12" v-for="i in 3" :key="i">
                            <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                                <v-skeleton-loader loading type="
                                    card-avatar,title,subtitle, text"></v-skeleton-loader>
                            </v-sheet>
                        </v-col>
                    </template>
                    <b-col cols="12" lg="12">
                        <PostsDetails v-for="(post, i) in postSlugData" :key="i" :maintitleSlugUrl="post.slug"
                            :postType="post.type" :mainTitle="post.title" :contentTitle="post.content_text"
                            :summary="post.summary" :createdAt="post.updated_at" :genre="post.post_category" />
                    </b-col>
                    <b-col cols="12" lg="12">
                        <PostsChapters v-for="(post, i) in postSlugData" :key="i" :mainTitle="post.title"
                            :chaptersData="post.chapter_number" :type="post.type" :chapterMainTitle="post.title" />
                        <Comments />
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
import PostsDetails from "@/components/posts/postdetail/PostsDetails.vue";
import PostsChapters from "@/components/posts/postdetail/chapters/PostsChapters.vue";
import Comments from "@/components/posts/comments/Comments.vue";
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';


export default {
    components: {
        PopularPost,
        Sidebar,
        PostsDetails,
        PostsChapters,
        Comments,
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
    computed: {
        ...mapState("post", ["isPostsLoading", "postSlugData", "isPostsLoading"]),
    },
    mounted() {
        this.loadAllPostData();
    },
    methods: {
        ...mapActions("post", ["fetchingLatestPostBySlug"]),
        loadAllPostData() {
            const slug = this.$route.params.slug;
            this.fetchingLatestPostBySlug({ slug })
        }
    }
}
</script>

<style></style>
