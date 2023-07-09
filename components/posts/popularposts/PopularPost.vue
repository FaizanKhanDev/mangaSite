<template>
    <b-col cols="6" class="popular-post" md="2">
        <nuxt-link :to="`/comics/${type}/${postSlugUrl}`">
            <img :src="require('~/assets/images/postPhoto2.webp')" alt="" class="post-thumnail">
            <div class="popular-post-thumnail-title">
                <h6 v-if="chapterTitle"> {{ truncateTitle(chapterTitle) }}....</h6>
                <p class="m-0"> Chapter {{ chapterNumber }}</p>
                <v-rating v-model="rating" class="rating" color="yellow darken-3" size="15" background-color="grey darken-1"
                    empty-icon="$ratingFull" half-increments hover readonly></v-rating>
            </div>
        </nuxt-link>


    </b-col>
</template>

<script>
export default {
    name: "PopularPost",
    props: {
        image: {
            type: String,
            required: false,

        },
        chapterTitle: {
            type: String,
            required: false,

        },

        chapterNumber: {
            type: String,
            required: false,

        },
        postSlugUrl: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: false,
        }
        // postCategoriesTitle: {
        //     type: Array,
        //     required: false,

        // },

        // chapterTitleGenre: {
        //     type: Array,
        //     required: false,

        // },
        // chapterPostMineTitle: {
        //     type: Array,
        //     required: false,

        // },
    },

    data() {
        return {
            rating: 5,
        }
    },
    computed: {
        truncateTitle() {
            return function (title) {
                const words = title.split('')
                const truncateWord = words.splice(0, 35);
                return truncateWord.join('')
            }
        },
    },
}
</script>

<style></style>