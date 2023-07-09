<template>
    <v-carousel v-model="model" cycle>
        <v-carousel-item v-for="(color, i) in colors" :key="i">
            <v-sheet :color="color" tile height="50%">
                <v-row class="fill-height" align="center" justify="center">
                    <div class="text-h2">
                        Faizan khan
                    </div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    data: () => ({
        model: 0,
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
            'red',
            'orange',
        ],
    }),
}
</script>
<style lang="css" scoped>
.v-carousel__controls {
    top: 187px !important;
}

.v-window__prev {
    top: 100px !important;
}
</style>