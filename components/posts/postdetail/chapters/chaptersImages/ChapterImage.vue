<template>
    <b-col cols="12">
        <nuxt-link to="/">
            <img :src="require('~/assets/images/chapterHeader.webp')" alt="" class="chapter-thumail-images">
        </nuxt-link>
        <nuxt-link to="/">
            <img :src="require('~/assets/images/chpaterCenter.webp')" alt="" class="chapter-thumail-images">
        </nuxt-link>
        <img :src="require('~/assets/images/chapterImage.jpg')" alt="" class="chapter-thumail-images">
    </b-col>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.chapter-thumail-images {
    width: 100%;
    margin: auto;
}
</style>