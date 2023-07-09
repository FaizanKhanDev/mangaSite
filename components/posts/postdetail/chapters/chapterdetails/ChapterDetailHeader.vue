<template>
    <b-col cols="12" class="chapter-detail-header">
        <h3 class="chapter-detail-header-title text-center">
            {{ removehyphen }}</h3>
        <p class="text-center all-chapter-are">All chapters are in
            <nuxt-link :to="`/comics/${type}/${postSlug}`">{{ postMainTitle }}</nuxt-link>
        </p>
        <b-col cols="12" md="5" class="social-media-col">
            <v-btn tile color="#3b5999" x-small class="white--text">
                <v-icon left>
                    mdi-facebook
                </v-icon>
                Facebook
            </v-btn>
            <v-btn tile color="#1da1f2" x-small class="white--text">
                <v-icon left>
                    mdi-twitter
                </v-icon>
                Facebook
            </v-btn>
            <v-btn tile color="#01ba6d" x-small class="white--text">
                <v-icon left>
                    mdi-whatsapp
                </v-icon>
                whatsapp
            </v-btn>
            <v-btn tile color="#e81737" x-small class="white--text">
                <v-icon left>
                    mdi-youtube
                </v-icon>
                Youtube
            </v-btn>
        </b-col>
        <b-col cols="12" class="chapter-header-main-content">
            <p class="text-center chapter-header-content-para">
                <nuxt-link to="/"> Manhwa Maven</nuxt-link>
                <v-btn icon x-small plain>
                    <v-icon small>mdi-chevron-right</v-icon></v-btn>
                <nuxt-link :to="`/comics/${type}/${postSlug}`">{{ postMainTitle }}</nuxt-link> <v-btn icon x-small
                    plain><v-icon small>mdi-chevron-right</v-icon></v-btn>

                <nuxt-link :to="`/comics/${type}/${postSlug}`"> {{ removehyphen }}</nuxt-link>
            </p>
        </b-col>
        <p class="text-center chapter-header-content-para">
            Read the latest manga <strong> {{ removehyphen }} </strong> at Manhwa Maven .
            Manga Revenge of the
            {{ removehyphen }} is always updated at Manhwa Maven . Don't forget to read the other manga updates. A list
            of manga collections Manhwa Maven is in the Manga List men</p>
    </b-col>
</template>

<script>
export default {
    name: "ChapterDetailHeader",
    props: {
        mainTitle: {
            type: String,
            required: false,
        },
        postMainTitle: {
            type: String,
            required: false,
        },
        postSlug: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: false,
        }


    },
    computed: {
        removehyphen() {
            const getMainTitle = this.mainTitle;
            const cleanedSlug = getMainTitle.replace(/-/g, " ")
            console.log(cleanedSlug)
            return cleanedSlug;
        }
    },
    data() {
        return {

        }
    },

}
</script>

<style lang="css" scoped>
.chapter-detail-header {
    margin-top: 8rem;
}

.chapter-detail-header-title {
    font-weight: 700;
    text-transform: capitalize;
}

.social-media-col {
    margin: auto;
}
</style>