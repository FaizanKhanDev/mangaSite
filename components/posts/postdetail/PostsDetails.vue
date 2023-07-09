<template>
    <b-row>
        <b-col cols="12" class="post-detail-category">
            <nuxt-link to="/" class="white--text ">The Manhwa Maven</nuxt-link>
            <span class="white--text ">› </span>
            <nuxt-link :to="`/comics/${postType}/${maintitleSlugUrl}`" class="white--text ">
                {{ mainTitle }}
            </nuxt-link>
        </b-col>
        <b-col cols="12" class="post-detail-row">
            <b-row>
                <b-col cols="12" lg="3">
                    <img :src="require('~/assets/images/postPhoto.jpg')" alt="" class="post-detail-thumnail">
                    <div>
                        <v-btn color="#5569bf" block class="white--text bookmark-btn">
                            <v-icon>mdi-bookmark-outline</v-icon>
                            BookMark
                        </v-btn>
                        <p class="followed-people">Followed by 168162 people</p>
                        <div class="post-detail-status">
                            <v-rating v-model="rating" class="rating" color="yellow darken-3" size="20"
                                background-color="grey darken-1" empty-icon="$ratingFull" half-increments hover
                                readonly></v-rating>
                            <span>10</span>
                        </div>
                        <div class="post-detail-status">
                            <span>Status</span>
                            <span>Ongoing</span>
                        </div>
                        <div class="post-detail-status">
                            <span> Type </span>
                            <nuxt-link :to="`/comics/${postType}`" class="text-capitalize"> {{ postType }}</nuxt-link>
                        </div>
                    </div>

                </b-col>
                <b-col cols="12" lg="9" class="post-detail-description">
                    <h3 class="white--text">{{ mainTitle }}</h3>
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
                    <h6 class="white--text mt-7">Alternative Titles</h6>
                    <p>{{ contentTitle }}</p>
                    <h6 class="white--text mt-7">Synopsis {{ mainTitle }}</h6>
                    <p>{{ summary }}</p>
                    <b-row>
                        <div class="post-detail-extra-details mt-5">
                            <h6 class="white--text">Released</h6>
                            <h6 class="white--text">Author</h6>
                        </div>
                        <div class="post-detail-extra-details">
                            <span>manwamaven.com</span>
                            <span>ADMIN</span>
                        </div>
                        <div class="post-detail-extra-details mt-4">
                            <h6 class="white--text">Posted On</h6>
                            <h6 class="white--text">Posted By</h6>
                        </div>
                        <div class="post-detail-extra-details">
                            <!-- <span>March 23, 2021</span> -->
                            <span>{{ formattedDate }}</span>
                            <span>ADMIN</span>
                        </div>
                        <b-col cols="12" class="mb-10">
                            <h6 class="white--text">Genres</h6>
                            <nuxt-link v-for="(category, i) in genre" :key="i" :to="`/genre/${category.category.slug}`">
                                <v-btn small color="#343434" class="white--text mt-1 ml-1">
                                    {{ category.category.title }}
                                </v-btn>
                            </nuxt-link>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "PostsDetails",
    props: {
        mainTitle: {
            type: String,
            required: false,
        },
        maintitleSlugUrl: {
            type: String,
            required: false,
        },
        contentTitle: {
            type: String,
            required: false,
        },
        summary: {
            type: String,
            required: false,
        },

        createdAt: {
            type: String,
            required: false,
        },
        genre: {
            type: Array,
            required: false,
        },
        postType: {
            type: String,
            required: false,
        }

    },
    data() {
        return {

            rating: 5,
        }
    },
    computed: {
        formattedDate() {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
            const date = new Date(this.createdAt);
            return date.toLocaleDateString(undefined, options);
        }
    }
}
</script>

<style></style>