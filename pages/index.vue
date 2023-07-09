<template>
  <b-container>
    <b-row class="posts-row">
      <b-col cols="12" lg="9">
        <!-- <Carousel /> -->
        <b-row>
          <b-col cols="12" lg="12" class="mt-4">
            <b-row class="popular-row">
              <b-col cols="12" class="popular-today">
                <h5 class="white--text m-0">Popular Today</h5>
              </b-col>
              <!-- popular Posts -->
              <template v-if="posts">
                <PopularPost v-for="(post, i) in posts.post" :postSlugUrl="post.slug" :chapterTitle="post.title"
                  :type="post.type" :key="i" />
                <!-- :image="post.image" -->
                <!-- :chapterNumber="post.chapter" :key="i"
                -->
              </template>
              <template v-if="isPostsLoading">
                <v-row class="p-5">
                  <v-col cols="12" md="4" v-for="i in 10" :key="i">
                    <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                      <v-skeleton-loader type="card-avatar,title,title, subtitle, text"></v-skeleton-loader>
                    </v-sheet>
                  </v-col>
                </v-row>
              </template>

              <!-- popular Posts -->
            </b-row>
          </b-col>
          <!-- LatestUpdatePosts Posts -->

          <b-col cols="12" lg="12">
            <LatestUpdatePosts />
          </b-col>

          <!-- LatestUpdatePosts Posts -->

        </b-row>
      </b-col>
      <b-col cols="12" lg="3">
        <Sidebar />
        <template v-if="isPostsLoading">
          <br>
          <br>
          <br>
          <br>
          <v-sheet v-for="i in 10" :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3" :key="i">
            <v-skeleton-loader type="avatar,title, subtitle, text"></v-skeleton-loader>
          </v-sheet>
        </template>

      </b-col>


    </b-row>
  </b-container>
</template>

<script>
import Carousel from "@/components/posts/carousel/Carousel.vue";
import PopularPost from "@/components/posts/popularposts/PopularPost.vue";
import Sidebar from "@/components/posts/sidebar/Sidebar.vue";
import LatestUpdatePosts from "@/components/posts/latestupdateposts/LatestUpdatePosts.vue";
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'IndexPage',
  components: {
    Carousel,
    PopularPost,
    Sidebar,
    LatestUpdatePosts
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  data() {
    return {

    }
  },
  mounted() {
    this.loadAllPostData()
  },
  computed: {
    ...mapState("post", ["posts", "isPostsLoading"]),
    // slicePost() {
    //   return this.posts.post ? this.posts.post.slice(0, 5) : []
    // }
  },
  methods: {
    ...mapActions("post", ["allPostsData"]),
    loadAllPostData() {
      this.allPostsData()
    }
  }
}
</script>
<style scoped></style>