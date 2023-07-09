<template>
    <b-container>
        <b-row>
            <ChapterDetailHeader v-for="(chapter, i) in chapterSlugData" :mainTitle="chapter.slug" :key="i"
                :postMainTitle="chapter.post.title" :postSlug="chapter.post.slug" :type="chapter.post.type" />
            <b-row>
                <b-col cols="12" md="3" class="mt-5 mb-5">
                    <v-select block v-model="selectedChapter" dense rounded outlined :items="postChapterOptions"
                        label="Select Chapter" @change="navigateToChapter"></v-select>
                </b-col>
                <v-spacer></v-spacer>
                <b-col cols="12" lg="2" class="mt-5 mb-5">
                    <v-btn color="#3949ab" dense :disabled="!prev" small @click="gotToPrevChapter">
                        <v-icon small>mdi-chevron-left</v-icon>
                        Prev
                    </v-btn>
                    <v-btn color="#3949ab" dense :disabled="!next" small @click="goToNextChapter">Next
                        <v-icon small>mdi-chevron-right</v-icon>
                    </v-btn>
                </b-col>
            </b-row>
            <ChapterImage />
        </b-row>
    </b-container>
</template>

<script>
import ChapterImage from "@/components/posts/postdetail/chapters/chaptersImages/ChapterImage.vue";
import ChapterDetailHeader from "@/components/posts/postdetail/chapters/chapterdetails/ChapterDetailHeader.vue";
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            items: [],
            selectedChapter: null,
            next: true,
            prev: true,
        }
    },
    components: {
        ChapterImage,
        ChapterDetailHeader,
    },
    computed: {
        ...mapState("chapters", ["allChapters", "chapterSlugData", "chapterWithPostId",]),
        postChapterOptions() {
            if (!this.chapterWithPostId) {
                return [];
            }
            return this.chapterWithPostId.map(chapter => ({
                text: `Chapter No ${chapter.number_of_chapter}`,
                value: chapter.slug, // Use number_of_chapter as the value
                slug: chapter.slug,
                to: `/chapter/${chapter.slug}`,
                post_id: chapter.post_id,
                slugData: chapter.slug,

            }));
        },
    },
    mounted() {
        this.loadAllPostData();


    },
    methods: {
        ...mapActions("chapters", ["fetchingAllChapters", "fetchingChapterSlugData", "fetchingChapterWithPostId"]),
        async loadAllPostData() {


            // fetching All Chapters
            await this.fetchingAllChapters();




            //fetching Chapter Slug withData
            const slug = this.$route.params.slug;
            this.selectedChapter = slug
            await this.fetchingChapterSlugData({ slug })


            //  getting the chapter post ID 
            const post_id = this.chapterSlugData.map(chapter => chapter.post_id).pop();

            //  The Post ID Sending into the API
            await this.fetchingChapterWithPostId({ post_id })


        },
        // go To NextChapter on click the next BTN
        goToNextChapter() {
            const currentIndex = this.postChapterOptions.findIndex(options => options.value === this.selectedChapter);
            if (currentIndex < this.postChapterOptions.length - 1) {
                this.selectedChapter = this.postChapterOptions[currentIndex + 1].value
                this.navigateToChapter()
            }
            else {
                this.next = false;
            }
        },

        // go To prevChapter on click the prev BTN
        gotToPrevChapter() {
            const currentIndex = this.postChapterOptions.findIndex(options => options.value === this.selectedChapter)
            if (currentIndex > 0) {
                this.selectedChapter = this.postChapterOptions[currentIndex - 1].value;
                this.navigateToChapter();
            }
            else {
                this.prev = false;
            }

        },
        //  navigate To Chapter with the chapter Slug
        navigateToChapter() {
            if (this.selectedChapter) {
                const chapter = this.postChapterOptions.find(options => options.slug === this.selectedChapter);
                if (chapter) {
                    this.$router.push(`/chapter/${chapter.slug}`);
                } else {
                    console.log("route isn't changing");
                }
            }
        },

    }
}
</script>

<style></style>