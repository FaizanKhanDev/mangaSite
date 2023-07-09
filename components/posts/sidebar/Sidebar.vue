<template>
    <b-row class="popular-row popular-sidebar-row mt-1">
        <b-col cols="12" class="popular-today">
            <h5 class="white--text m-0">Popular</h5>
        </b-col>
        <!-- Post  control btn -->
        <b-col cols="12" class="popular-btn-group">
            <div class="side-bar-btn-group">
                <v-btn @click="popularWeeklyEvent" :class="{ 'active-popular-side-bar-btn': popularWeekly }" small
                    class="popular-side-bar-btn" text>weekly</v-btn>
                <v-btn @click="popularMonthlyEvent" :class="{ 'active-popular-side-bar-btn': popularMonthly }" small
                    class="popular-side-bar-btn" text>Monthly</v-btn>
                <v-btn @click="popularAllEvent" :class="{ 'active-popular-side-bar-btn': popularAll }" small
                    class="popular-side-bar-btn" text>All</v-btn>
            </div>
        </b-col>
        <div v-if="popularWeekly">

            <SidebarPopularPost v-for="(post, i) in slicePost" :mainSlug="post.slug" :key="i" :title="post.title"
                :genresName="post.post_category" :type="post.type" />
            <!-- :image="post.image" -->
        </div>
        <div v-if="popularMonthly">

            <SidebarPopularPost v-for="(post, i) in slicePost" :mainSlug="post.slug" :key="i" :title="post.title"
                :genresName="post.post_category" :type="post.type" />
        </div>
        <div v-if="popularAll">
            <SidebarPopularPost v-for="(post, i) in slicePost" :mainSlug="post.slug" :key="i" :title="post.title"
                :genresName="post.post_category" :type="post.type" />
        </div>


    </b-row>
</template>

<script>
import SidebarPopularPost from "@/components/posts/sidebar/SidebarPopularPost.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
    name: "Sidebar",
    components: {
        SidebarPopularPost,
    },
    data() {
        return {
            rating: 5,
            popularWeekly: true,
            popularMonthly: false,
            popularAll: false,
            popularWeeklyPost: [

                {
                    image: require('~/assets/images/postPhoto2.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto.jpg'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto3.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto4.png'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto5.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto.jpg'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto2.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto3.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto4.png'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto5.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },


            ],
            popularMonthlyPost: [
                {
                    image: require('~/assets/images/postPhoto.jpg'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto2.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto3.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto4.png'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto5.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto.jpg'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto2.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto3.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto4.png'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto5.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },

            ],
            popularAllPost: [
                {
                    image: require('~/assets/images/postPhoto3.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto2.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto.jpg'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto4.png'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto5.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto.jpg'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto2.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto3.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto4.png'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },
                {
                    image: require('~/assets/images/postPhoto5.webp'),
                    title: "Return of the Mount Hua Sect",
                    genres: [
                        { name: "Adventure,", url: "/" },
                        { name: "Comedy,", url: "/" },
                        { name: "Fantasy,", url: "/" },
                        { name: "Martial Arts,", url: "/" },
                        { name: "Shounen,", url: "/" },
                    ]
                },

            ],
        }
    },
    computed: {
        ...mapState("post", ["posts"]),
        slicePost() {
            return this.posts.post ? this.posts.post.slice(0, 14) : []
        }

    },
    mounted() {
        this.loadAllPostData();
    },
    methods: {
        ...mapActions("post", ["allPostsData"]),
        popularWeeklyEvent() {
            this.popularMonthly = false;
            this.popularAll = false;
            this.popularWeekly = true;
        },
        popularMonthlyEvent() {
            this.popularMonthly = true;
            this.popularWeekly = false;
            this.popularAll = false;
        },
        popularAllEvent() {
            this.popularWeekly = false;
            this.popularMonthly = false;
            this.popularAll = true;
        },
        loadAllPostData() {
            this.allPostsData()
        },
    },

}
</script>

<style></style>