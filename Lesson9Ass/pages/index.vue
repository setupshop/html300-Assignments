<template>
<section class="container">
    <h1>Gedion</h1>
    <p class="subheading">Week 9 | Lesson 9</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ipsam quasi voluptatum explicabo optio adipisci iste eum deleniti aliquam velit sequi delectus repudiandae praesentium nam ut soluta, officia tempora alias sunt? Debitis porro non deserunt. Accusamus maiores repellendus exercitationem esse!</p>
</section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  head() {
        return {
            title: 'Gedion Birhane Home',
            meta: [
                {name: 'Gedion', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing eli.'},
                {name: 'Example keywords', content: 'about Gedion, gedion info'},
            ]
        }
    }
}
    components: {
        Logo
    }
</script>

<style>

</style>
