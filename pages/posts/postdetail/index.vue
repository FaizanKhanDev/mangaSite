<template>
    <b-container class="home-main-container">
        <b-row class="posts-row">
            <b-col cols="12" lg="9">
                <b-row>
                    <b-col cols="12" lg="12">
                        <PostsDetails />
                    </b-col>
                    <b-col cols="12" lg="12">
                        <PostsChapters />
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
export default {
    name: 'PostDetail',
    components: {
        PopularPost,
        Sidebar,
        PostsDetails,
        PostsChapters,
        Comments,
    },
}
</script>
<style scoped></style>