<template>
    <b-container>
        <b-row class="posts-row">
            <b-col cols="12" lg="9" class="mt-4">
                <b-row>
                    <b-col cols="12" lg="12">
                        <b-row class="popular-row">
                            <b-col cols="12" class="popular-today">
                                <h5 class="white--text m-0">Trending </h5>
                            </b-col>
                            <PopularPost v-for="(post, i) in popularPosts" :image="post.image" :key="i"
                                :chapterTitle="post.title" :chapterNumber="post.chapter" />
                        </b-row>
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
// import Carousel from "@/components/posts/carousel/Carousel.vue";
import PopularPost from "@/components/posts/popularposts/PopularPost.vue";
import Sidebar from "@/components/posts/sidebar/Sidebar.vue";
export default {
    name: 'IndexPage',
    components: {
        // Carousel,
        PopularPost,
        Sidebar,
    },
    data() {
        return {
            popularPosts: [
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
                {
                    image: require("~/assets/images/postPhoto3.webp"),
                    title: "Return of the Mount Hua Sect",
                    chapter: "Chapter 77",
                },
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
                {
                    image: require("~/assets/images/postPhoto3.webp"),
                    title: "Return of the Mount Hua Sect",
                    chapter: "Chapter 77",
                },
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
                {
                    image: require("~/assets/images/postPhoto3.webp"),
                    title: "Return of the Mount Hua Sect",
                    chapter: "Chapter 77",
                },


            ]
        }
    }
}
</script>
<style scoped></style>