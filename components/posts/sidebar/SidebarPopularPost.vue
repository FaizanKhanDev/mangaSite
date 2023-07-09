<template>
    <b-col cols="12" md="12" class="popular-side-bar-col">
        <nuxt-link to="/">
            <img :src="require('~/assets/images/postPhoto.jpg')" alt="" class="popular-side-bar-thumnail">
        </nuxt-link>
        <div class="ps-2">
            <nuxt-link :to="`/comics/${type}/${mainSlug}`">
                <h6>{{ title }} </h6>
            </nuxt-link>
            <p class="m-0">Genres:
                <nuxt-link v-for="(genres, j) in genresName.slice(0, 8)" :to="`/genre/${genres.category.slug}`" :key="j">
                    {{ genres.category.title }},
                </nuxt-link>
            </p>

            <v-rating v-model="rating" class="rating" color="yellow darken-3" size="15" background-color="grey darken-1"
                empty-icon="$ratingFull" half-increments hover readonly></v-rating>
        </div>
    </b-col>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {

    name: "SidebarPopularPost",

    props: {
        image: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        genresName: {
            type: Array,
            required: false,
        },
        mainSlug: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: false,
        },


    },
    data() {
        return {
            rating: 5,
        }
    },
    mounted() {
        this.loadAllPostData();
    },
    computed: {
        ...mapState("post", ["posts"]),


    },
    methods: {
        ...mapActions("post", ["allPostsData"]),
        loadAllPostData() {
            this.allPostsData();
        },


    }
}
</script>

<style></style>
