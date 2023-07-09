<template>
    <b-col cols="12" md="12">
        <v-form>
            <v-btn @click="headerGenres" x-small>Genres All
                <v-icon right dark>
                    mdi-chevron-down
                </v-icon>
            </v-btn>
            <v-btn append-icon="" @click="headerStatusAll" x-small>Status All
                <v-icon right dark>
                    mdi-chevron-down
                </v-icon>
            </v-btn>
            <v-btn append-icon="" x-small @click="headerTypeAll">Type All
                <v-icon right dark>
                    mdi-chevron-down
                </v-icon>
            </v-btn>
            <v-btn append-icon="" x-small @click="headerOrderByUpdate">Order by Update
                <v-icon right dark>
                    mdi-chevron-down
                </v-icon>
            </v-btn>
            <v-btn append-icon="" x-small color="#5569bf">Search
                <v-icon right dark>
                    mdi-magnify
                </v-icon>
            </v-btn>
        </v-form>
        <div class="search-header" v-if="genres">
            <v-card flat>
                <v-card-text>
                    <h6 class="white--text">Genres </h6>

                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="3" class="p-0" v-for="(item, i) in items" :key="i">
                                <v-checkbox dense small :label="item.name" color="#5569bf" :value="item.value"
                                    hide-details></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
        <div class="search-header" v-if="status">
            <v-card flat>
                <v-card-text>
                    <h6 class="white--text">Status </h6>

                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="3" class="p-0" v-for="(item, i) in items" :key="i">
                                <v-checkbox dense small :label="item.name" color="#5569bf" :value="item.value"
                                    hide-details></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
        <div class="search-header" v-if="typeAll">
            <v-card flat>
                <v-card-text>
                    <h6 class="white--text">Type </h6>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="3" class="p-0" v-for="(item, i) in items" :key="i">
                                <v-checkbox dense small :label="item.name" color="#5569bf" :value="item.value"
                                    hide-details></v-checkbox>
                            </v-col>

                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
        <div class="search-header" v-if="orderByUpdate">
            <v-card flat>
                <v-card-text>
                    <h6 class="white--text">Order By </h6>

                    <v-container fluid>
                        <v-row>
                            <v-col cols="3" sm="3" md="3" class="p-0" v-for="(item, i) in items" :key="i">
                                <v-checkbox dense small :label="item.name" color="#5569bf" :value="item.value"
                                    hide-details></v-checkbox>
                            </v-col>

                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
    </b-col>
</template>

<script>
export default {
    name: "SearchHeader",
    data() {
        return {
            genres: false,
            status: false,
            typeAll: false,
            orderByUpdate: false,
            items: [
                { name: 'Action', value: 'action' },
                { name: 'Adaptation', value: 'adaptation' },
                { name: 'Adult', value: 'adult' },
                { name: 'Adventure', value: 'adventure' },
                { name: 'Another chance', value: 'another_chance' },
                { name: 'Apocalypse', value: 'apocalypse' },
                { name: 'Comedy', value: 'comedy' },
                { name: 'Coming Soon', value: 'coming_soon' },
                { name: 'Cultivation', value: 'cultivation' },
                { name: 'Cute', value: 'cute' },
                { name: 'Demon', value: 'demon' },
                { name: 'Discord', value: 'discord' },
                { name: 'Drama', value: 'drama' },
                { name: 'Dungeons', value: 'dungeons' },
                { name: 'Ecchi', value: 'ecchi' },
                { name: 'Fantasy', value: 'fantasy' },
                { name: 'Game', value: 'game' },
                { name: 'Genius', value: 'genius' },
                { name: 'Genius MC', value: 'genius_mc' },
                { name: 'Harem', value: 'harem' },
                { name: 'Hero', value: 'hero' },
                { name: 'Historical', value: 'historical' },
                { name: 'Isekai', value: 'isekai' },
                { name: 'Josei', value: 'josei' },
                { name: 'Kool Kids', value: 'kool_kids' },
                { name: 'Loli', value: 'loli' },
                { name: 'Magic', value: 'magic' },
                { name: 'Martial Arts', value: 'martial_arts' },
                { name: 'Mature', value: 'mature' },
                { name: 'Mecha', value: 'mecha' },
                { name: 'Modern Setting', value: 'modern_setting' },
                { name: 'Monsters', value: 'monsters' },
                { name: 'Murim', value: 'murim' },
                { name: 'Mystery', value: 'mystery' },
                { name: 'Necromancer', value: 'necromancer' },
                { name: 'Noble', value: 'noble' },
                { name: 'Overpowered', value: 'overpowered' },
                { name: 'Pets', value: 'pets' },
                { name: 'Post-Apocalyptic', value: 'post_apocalyptic' },
                { name: 'Psychological', value: 'psychological' },
                { name: 'Rebirth', value: 'rebirth' },
                { name: 'Regression', value: 'regression' },
                { name: 'Reincarnation', value: 'reincarnation' },
                { name: 'Return', value: 'return' },
                { name: 'Returned', value: 'returned' },
                { name: 'Returner', value: 'returner' },
                { name: 'Revenge', value: 'revenge' },
                { name: 'Romance', value: 'romance' },
                { name: 'School Life', value: 'school_life' },
            ],

        }

    },
    mounted() {
        for (let i = 1; i <= 1; i++) {
            this.items.push({
                fullName: `Chapter ${i}`,
                released: `${i} days Ago`,
            });
        }
    },
    methods: {
        headerGenres() {
            this.genres = !this.genres;
            this.status = false;
            this.typeAll = false;
            this.orderByUpdate = false;
        },
        headerStatusAll() {
            this.genres = false;
            this.status = !this.status;
            this.typeAll = false;
            this.orderByUpdate = false;
        },
        headerTypeAll() {
            this.typeAll = !this.typeAll;
            this.genres = false;
            this.status = false;
            this.orderByUpdate = false;
        },
        headerOrderByUpdate() {
            this.orderByUpdate = !this.orderByUpdate;
            this.genres = false;
            this.status = false;
            this.typeAll = false;
        },
    }
}
</script>

<style lang="css" scoped>
.search-header {
    height: 300px;
    width: 100%;
    overflow: auto;
    position: absolute;
    background: var(--secondaryBlack);
    z-index: 99;
    left: 0;
}

.search-header::-webkit-scrollbar {
    background-color: var(--secondaryBlack) !important;
    width: 5px;

}

.search-header::-webkit-scrollbar-thumb {
    background-color: var(--mainLightBlue) !important;
}

.search-header label {
    margin: 0px !important;
}
</style>