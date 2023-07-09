<template>
    <b-container>
        <b-row class="posts-row">
            <b-col cols="12" lg="9" class="mt-0">
                <b-row>
                    <b-col cols="12" lg="12" class="mt-4">
                        <b-row class="popular-row">
                            <b-col cols="12" class="popular-today d-flex ">
                                <h5 class="white--text m-0">Bookmarks</h5>
                                <v-spacer></v-spacer>
                                <v-btn small color="red">Delete</v-btn>
                            </b-col>
                            <b-col cols="12" class="popular-today d-flex ">
                                <p>You can save a list of manga titles here up to 200. The list approves based on the latest
                                    update date. The list of manga is stored in a browser that you can use right now.</p>
                            </b-col>
                            <PopularPost v-for="(post, i) in bookMarkPosts" :image="post.image" :key="i"
                                :chapterTitle="post.title" :chapterNumber="post.chapter" />
                        </b-row>
                    </b-col>
                    <b-col cols="12 " class="empty-space"></b-col>
                </b-row>
            </b-col>

            <b-col cols="12" lg="3">
                <Sidebar />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// import Carousel from "@/components/posts/carousel/Carousel.vue";
import PopularPost from "@/components/posts/popularposts/PopularPost.vue";
import Sidebar from "@/components/posts/sidebar/Sidebar.vue";
export default {
    name: 'IndexPage',
    components: {
        PopularPost,
        Sidebar,
    },
    data() {
        return {
            bookMarkPosts: [
                {
                    image: require("~/assets/images/postPhoto.jpg"),
                    title: "Return of the Mount Hua Sect",
                    chapter: "Chapter 77",
                },
                {
                    image: require("~/assets/images/postPhoto2.webp"),
                    title: "Return of the Mount Hua Sect",
                    chapter: "Chapter 77",
                },
                {
                    image: require("~/assets/images/postPhoto3.webp"),
                    title: "Return of the Mount Hua Sect",
                    chapter: "Chapter 77",
                },
                {
                    image: require("~/assets/images/postPhoto4.png"),
                    title: "Return of the Mount Hua Sect",
                    chapter: "Chapter 77",
                },
                {
                    image: require("~/assets/images/postPhoto5.webp"),
                    title: "Return of the Mount Hua Sect",
                    chapter: "Chapter 77",
                },



            ]
        }
    }
}
</script>
<style scoped>
.empty-space {
    height: 800px;
}

@media only screen and (max-width:991px) {
    .empty-space {
        display: none;
    }

}
</style>