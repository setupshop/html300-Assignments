<template>
<div class="container">
    <h1>Current Prices</h1>
    <hr>
    <div class="game-container">
        <div class="container-inner" v-for="game in games" :key="game.id">
            <img :src="game.cover.url.replace('t_thumb', 't_cover_big')" alt="game cover">
            <strong><div class="movie-title"> {{ game.name }}</div></strong>
            <div><span>Genres</span> {{ game.genres[0].name }}</div>
            <span>{{game.url}}</span>
        </div>
    </div>
</div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
    components: {
        Logo
    },

    asyncData ({ params, error }) {
    return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then((res) => {
      return {
          games: res.data
        }
    })
    .catch((e) => {
            console.log(e)
    })
  },

    data() {
        return {
            games: []
        }
    }
}

</script>

<style>
span {
    font-size: 0.8rem;
}

.movie-title {
    font-size: 1.5rem;
}


.container {
    margin-top: 60px;

}

.game-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    /* background-color: antiquewhite; */
    overflow: hidden;
    align-items: center;
}

.game-container img {
    margin-bottom: 20px;
}

.container-inner {
    padding: 20px;
    justify-content: center;

}

</style>
