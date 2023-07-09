<template>
    <b-row class="latest-updates">
        <b-col cols="12" class="popular-today latest-updates-title">
            <h5 class="white--text m-0">Lastest Updates </h5>
            <nuxt-link to="/">
                <v-btn small color="#3949ab" class="white--text view-all-post-btn">VIEW ALL</v-btn>
            </nuxt-link>
        </b-col>
        <template v-if="posts">
            <!-- <b-col cols="12" lg="6" md="12" class="latest-updates-thumnail-col" v-for="(post, i) in posts.post" :key="i"> -->
            <b-col cols="12" lg="6" md="12" class="latest-updates-thumnail-col" v-for="(post, i) in reversedPosts" :key="i">
                <nuxt-link :to="`/comics/${post.type}/${post.slug}`" v-for="(img, i) in images" :key="i">
                    <img :src="img.image" alt="" class="latest-updates-thumnail">
                </nuxt-link>
                <div class="latest-updates-thumnail-sub-col">
                    <nuxt-link :to="`/comics/${post.type}/${post.slug}`">
                        <h6>{{ post.title }}</h6>
                    </nuxt-link>
                    <div class="latest-update-chapter-thumnail-detail"
                        v-for="(chapternumber, i) in post.chapter_number.slice(0, 3)" :key="i">
                        <nuxt-link :to="`/chapter/${chapternumber.slug}`">
                            <h6>Chapter {{ chapternumber.number_of_chapter }}</h6>
                        </nuxt-link>
                        <p class="m-0">{{ formatDate(chapternumber.created_at) }}</p>
                    </div>
                </div>
            </b-col>
        </template>
        <v-row class="p-5" v-if="isPostsLoading">
            <template>
                <v-col cols="12" md="6" v-for="i in 10" :key="i">
                    <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                        <v-skeleton-loader type="card-avatar,article,title, subtitle, text" loading></v-skeleton-loader>
                    </v-sheet>
                </v-col>
            </template>
        </v-row>
    </b-row>
</template>
 
<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';

export default {
    name: "LatestUpdatePosts",
    data() {
        return {
            images: [
                { image: require('~/assets/images/postPhoto.jpg'), url: '/' },

            ],
        }
    },
    inject: {
        theme: {
            default: { isDark: false },
        },
    },
    computed: {
        ...mapState("post", ["posts", "isPostsLoading", "postSlugData"]),

        //  reversed All Posts it will be render the Latest post On the Top
        reversedPosts() {
            if (this.posts && this.posts.post) {
                return this.posts.post.slice().reverse();
            }
            return [];
        },
        mounted() {
            this.loadAllPostData();

        },
    },
    methods: {
        ...mapActions("post", ["allPostsData"]),
        ...mapActions("chapters", ["fetchingAllChapters", "fetchingChapterSlugData", "fetchingChapterWithPostId"]),
        formatDate(date) {
            const options = {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }
            const newDate = new Date(date).toLocaleString(undefined, options)
            return newDate;
        },
        async loadAllPostData() {
            await this.allPostsData();


        },
    }
}
</script>
 
<style></style>