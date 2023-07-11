<template>
    <header class="main-header">
        <b-container>
            <b-row class="my-header">
                <b-col cols="4" class="header-col-1 p-0">
                    <v-app-bar-nav-icon color="#fff" @click="drawer" class="mobile-icons">
                        <v-icon>mdi-menu</v-icon>
                    </v-app-bar-nav-icon>
                    <div class="join-login">
                        <v-icon class="account-icon">mdi mdi-account</v-icon>
                        <nuxt-link to="/">
                            <h6>SIGNUP</h6>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <h6>JOIN</h6>
                        </nuxt-link>
                    </div>
                </b-col>
                <b-col cols="4" class="p-0">
                    <div class="header-logo">
                        <nuxt-link to="/">
                            <img :src="require('~/assets/images/Manhwa Maven nav Logo.png')" alt="" />
                            <!-- <svg width="130" height="52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <rect fill="#EC1D24" width="100%" height="100%"></rect>
                                <path fill="#FEFEFE"
                                    d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z">
                                </path>
                                <path fill="#EC1D24" d="M0 0h30v52H0z"></path>
                                <path fill="#FEFEFE"
                                    d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z">
                                </path>
                            </svg> -->
                        </nuxt-link>
                    </div>
                </b-col>
                <b-col cols="4" class="social-icon-col  p-0">
                    <v-app-bar-nav-icon color="#fff" class="mobile-icons">
                        <v-icon>mdi-magnify</v-icon>
                    </v-app-bar-nav-icon>
                    <div class="social-icon">
                        <nuxt-link to="/">
                            <v-icon color="#fff">mdi mdi-facebook</v-icon>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <v-icon color="#fff">mdi mdi-youtube</v-icon>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <v-icon color="#fff">mdi mdi-twitter</v-icon>
                        </nuxt-link>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <nav class="top-navigation-bar">

            <ul :class="{ 'ul-res': naviDrawer }">
                <li>
                    <v-app-bar-nav-icon color="#fff" @click="drawer" class="mobile-icons">
                        <v-icon>mdi-close</v-icon>
                    </v-app-bar-nav-icon>
                </li>
                <li>
                    <nuxt-link to="/">Home </nuxt-link>
                </li>
                <li class="comics-item">
                    Comics
                    <ol class="comics-sub-items">
                        <nuxt-link to="/comics/manhua">
                            <li>
                                Manhua
                            </li>
                        </nuxt-link>
                        <nuxt-link to="/comics/manhwa">
                            <li>
                                Manhwa
                            </li>
                        </nuxt-link>
                        <nuxt-link to="/comics/manga">
                            <li>
                                Manga
                            </li>
                        </nuxt-link>
                    </ol>
                </li>
                <li>
                    <nuxt-link to="/">Novels</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/posts/bookmarks">BookMarks</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/posts/trendings">Trending</nuxt-link>
                </li>
                <div class="ul-inside">
                    <div>
                        <h6 class="insider-title">manhwa maven</h6>
                        <nuxt-link to="/">
                            <h6>SIGNUP</h6>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <h6>JOIN</h6>
                        </nuxt-link>
                    </div>
                </div>
                <div class="ul-inside-icons">
                    <nuxt-link to="/">
                        <v-icon color="#767676">mdi mdi-facebook</v-icon>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <v-icon color="#767676">mdi mdi-youtube</v-icon>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <v-icon color="#767676">mdi mdi-twitter</v-icon>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <v-icon color="#767676">mdi mdi-facebook</v-icon>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <v-icon color="#767676">mdi mdi-youtube</v-icon>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <v-icon color="#767676">mdi mdi-twitter</v-icon>
                    </nuxt-link>
                </div>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            naviDrawer: false,
        }

    },
    methods: {
        drawer() {
            this.naviDrawer = !this.naviDrawer;
        }
    }
}   
</script>

<style></style>