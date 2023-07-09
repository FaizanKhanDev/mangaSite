<template>
  <v-app class="our-main-container">
    <!-- <v-app> -->
    <Navbar />
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer,
  },

}
</script>
