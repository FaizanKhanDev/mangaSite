<template>
    <b-row class="carousel-cols">
        <b-col cols="12" lg="9">
            <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
                img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
                <b-carousel-slide>
                    <template #img>
                        <img class="d-block img-fluid w-100" width="1024" height="480"
                            src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                    </template>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                    </p>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template #img>
                        <img class="d-block img-fluid w-100" width="1024" height="480"
                            src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                    </template>
                    <b-row>
                        <b-col cols="6" md="8">
                            <nuxt-link to="/">
                                <h3>Return of The Unrivaled Spear Knight</h3>
                            </nuxt-link>
                            <h6>Manhwa</h6>
                            <nuxt-link to="/">Action</nuxt-link>
                            <nuxt-link to="/">Another</nuxt-link>
                            <nuxt-link to="/">Chance</nuxt-link>
                            <h6>Summary</h6>
                            <p>One day, out of the blue, he falls into hell. All he has with him is his desire to live and
                                predatory powers. From the thousandth hell to the nine…</p>
                            <p>Status Ongoing</p>
                        </b-col>
                        <b-col cols="6" md="4">
                            <v-img :src="require('~/assets/images/solomaxlevelnewbie.webp')" alt=""
                                class="carousel-thumnail"></v-img>

                        </b-col>
                    </b-row>

                </b-carousel-slide>
            </b-carousel>


        </b-col>
        <b-col cols="12" lg="3" class="p-0 pt-5">
            <v-img :src="require('~/assets/images/solomaxlevelnewbie.webp')" alt="" class="carousel-left-thumnail"></v-img>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }
}
</script>
<style scoped>
.carousel-cols {
    margin-left: -30px;
}

.carousel-left-thumnail {
    width: 217px;
    height: 292px;
    border-radius: 2px;

}

.carousel-thumnail {
    width: 150px;
    height: 200px;
}
</style>