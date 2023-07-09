<template>
    <footer class="footer">

        <b-container>

            <b-row>
                <b-col cols="3" lg="1" md="2" sm="2">
                    <img :src="require('~/assets/images/footerlogo.png')" alt="" class="footer-logo mt-3">
                </b-col>
                <b-col cols="9" lg="3" md="5" sm="5">
                    <ul>
                        <li>
                            <nuxt-link to="/">About Manhwa Maven</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">HELP/FAQS</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">CAREERS</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">INTERNSHIPS</nuxt-link>
                        </li>
                    </ul>
                </b-col>
                <b-col cols="6" lg="2" md="5" sm="5" class="footer-col-second">
                    <ul>
                        <li>
                            <nuxt-link to="/">ADVERTISING</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">DISNEY+</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">MARVELHQ.COM</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">REDEEM DIGITAL COMICS</nuxt-link>
                        </li>
                    </ul>
                </b-col>
                <b-col cols="12" lg="4" md="7" sm="7" class="footer-col-third">
                    <ul>
                        <li>
                            <nuxt-link to="/">
                                <h6 class="m-0">Manhwa INSIDER</h6>
                                <span> Get Rewarded for Being a Marvel Fan</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">
                                <h6 class="m-0 mt-5">Manhwa UNLIMITED</h6>
                                <span> Access Over 30,000+ Digital Comics </span>
                            </nuxt-link>
                        </li>

                    </ul>
                </b-col>
                <b-col cols="12" lg="2" md="5" sm="5" class="footer-col-fourth">
                    <h6 class="white--text">FOLLOW MARVEL</h6>
                    <div class="footer-icon">
                        <nuxt-link to="/">
                            <v-btn text dense rounded>
                                <v-icon>mdi-facebook</v-icon>
                            </v-btn>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <v-btn text dense rounded>
                                <v-icon>mdi-twitter</v-icon>
                            </v-btn>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <v-btn text dense rounded>
                                <v-icon>mdi-youtube</v-icon>
                            </v-btn>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <v-btn text dense rounded>
                                <v-icon>mdi-instagram</v-icon>
                            </v-btn>
                        </nuxt-link>
                    </div>

                </b-col>
            </b-row>
            <div class="footer-copy-right-section">
                <nuxt-link to="/">
                    Terms of Use
                </nuxt-link>
                <nuxt-link to="/">
                    Privacy Policy
                </nuxt-link>
                <nuxt-link to="/">
                    Interest-Based Ads
                </nuxt-link>
                <nuxt-link to="/">
                    License Agreement
                </nuxt-link>
                <nuxt-link to="/">
                    ©2023 MANHWA MANVEN
                </nuxt-link>
            </div>
        </b-container>


    </footer>
</template>

<script>
export default {

}
</script>

<style></style>