<template>
    <b-row>
        <b-col cols="12" md="12" class="chapter-main-title">
            <h6 class="white--text mb-0">Chapter: {{ chapterMainTitle }}</h6>
        </b-col>
        <b-col cols="12" md="12">
            <b-row>
                <b-col cols="12" md="6">
                    <v-btn block class="chapters-btn white--text" color="#5569bf">
                        <!-- :key="i" :to="`/chapter/${chapter.slug}`"
                        v-for="(chapter, i) in firstChapterOfPost" -->
                        <div>
                            <p class="white--text">First Chapter</p>
                        </div>
                        <div>
                            <p class="white--text m-0">Chapter </p>
                            <!-- {{ chapter.number_of_chapter }} -->
                        </div>
                    </v-btn>
                </b-col>
                <b-col cols="12" md="6">
                    <v-btn block class="chapters-btn white--text" color="#5569bf">
                        <!-- v-for="(chapter, i) in lastChapterOfPost" :key="i" :to="`/chapter/${chapter.slug}`" -->
                        <div>
                            <p class="white--text">Last Chapter</p>
                        </div>
                        <div>
                            <p class="white--text m-0">Chapter </p>
                            <!-- {{ chapter.number_of_chapter }} -->
                        </div>
                    </v-btn>
                </b-col>

                <b-col cols="12" md="12">
                    <v-text-field outlined dense label="Search Chapter" v-model="searchQuery"
                        placeholder="Search Chapter Example Chapter 01 or 77" class="white--text"></v-text-field>
                    <v-card max-width="830" class="mx-auto chapter-card-over-flow overflow-auto" height="400">
                        <v-list subheader two-line>
                            <v-subheader>Related Chapters</v-subheader>
                            <v-list-item-group>
                                <v-list-item v-for="(chapter, i) in filteredItems" :key="i"
                                    :to="`/comics/${type}/chapter/${chapter.slug}`">
                                    <template>
                                        <v-list-item-avatar>
                                            <v-icon dark>
                                                mdi-book-open-page-variant
                                            </v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Chapter {{ chapter.number_of_chapter }}
                                            </v-list-item-title>

                                            <v-list-item-subtitle>{{ formatDate(chapter.created_at) }}
                                                Ago</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn small color="#3949ab">
                                                view chapter
                                                <v-icon small>
                                                    mdi-open-in-new
                                                </v-icon>
                                            </v-btn>
                                        </v-list-item-action>
                                    </template>
                                </v-list-item>
                                <v-list-item>
                                    <template v-if="filteredItems.length === 0">
                                        <v-list-item-title>Chapter No Found</v-list-item-title>
                                    </template>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>

                </b-col>

            </b-row>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "PostChapters",
    props: {
        chapterMainTitle: {
            type: String,
            required: false,
        },
        chaptersData: {
            type: Array,
            required: false,
        },
        created_at: {
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
            searchQuery: '',
            // firstChapterOfPost: [],
            // lastChapterOfPost: [],

        }
    },
    computed: {
        chapterNumbers() {
            return this.chaptersData;
        },
        //  get First AndLast Chapter index



        //  Filtering the Chapters 
        filteredItems() {
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                return this.chapterNumbers.filter(chapter => {
                    const chapterNumber = chapter.number_of_chapter.toLowerCase();
                    return chapterNumber.includes(query)
                });
            }
            return this.chapterNumbers

        }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = new Date(date).toLocaleDateString(undefined, options);
            return formattedDate;
        },

        // getFirstAndLastChapter() {
        //     // const getfirstObj = this.chapterNumbers[0];
        //     const getfirstObj = this.chapterNumbers.splice(0, 1)[0];
        //     // const getfirstObj = this.chapterNumbers.shift();
        //     const getlastObj = this.chapterNumbers.slice(-1);
        //     this.firstChapterOfPost = getfirstObj;
        //     this.lastChapterOfPost = getlastObj;
        //     console.log("firstChapterOfPost", this.lastChapterOfPost)
        // },

    },
    mounted() {
        // this.getFirstAndLastChapter();
    },

}
</script>

<style lang="css" scoped></style>