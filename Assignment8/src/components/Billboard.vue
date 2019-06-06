<template>
<header id="home-section">
    <div class="dark-overlay">

        <div class="home-inner container">
            <div class="row">
                <div class="col-lg-12 d-lg-block">
                    <b-carousel id="carousel-fade" fade indicators>
                        <b-carousel-slide class="hero-image align-self-start" v-bind:src="background" v-bind:alt="background-nike-image">
                            <div class="d-sm-block text-left mb-5">
                                <img class="nike-logo mb-4" v-bind:src="nikeLogo" v-bind:alt="nike-logo">
                                <h1>{{ title }}</h1>
                                <p class="lead">{{subTitle}}</p>
                                <a href="#" class="btn btn-lg">Shop Now</a>
                            </div>
                        </b-carousel-slide>

                        <b-carousel-slide class="hero-image">
                            <div class="d-sm-block text-left mb-5">
                                <img class="adidas-logo mb-4" v-bind:src="adidasLogo" v-bind:alt="nike-logo">
                                <h1>{{ title }}</h1>
                                <p class="lead">{{subTitle}}</p>
                                <a href="#" class="btn btn-lg">Shop Now</a>
                            </div>
                        </b-carousel-slide>

                        <b-carousel-slide class="hero-image">
                            <div class="d-sm-block text-left mb-5">
                                <img class="puma-logo mb-4" v-bind:src="pumaLogo" v-bind:alt="nike-logo">
                                <h1>{{ title }}</h1>
                                <p class="lead">{{subTitle}}</p>
                                <a href="#" class="btn btn-lg">Shop Now</a>
                            </div>
                        </b-carousel-slide>

                    </b-carousel>

                </div>

            </div>

        </div>

    </div>

</header>
</template>

<script>
export default {
    name: 'Billboard',
    data() {
        return {
            title: 'This is a title!',
            subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ipsam',
            nikeLogo: 'http://pngimg.com/uploads/nike/nike_PNG9.png',
            adidasLogo: 'https://www.searchpng.com/wp-content/uploads/2019/01/Adidas-Logo-White-PNG-715x715.png',
            pumaLogo: 'https://www.kicksusa.com/media/wysiwyg/brands/puma/puma-logo1.png',
        }
    }

}
</script>

<style scoped>
.btn {
    background: white;
    color: black;
    font-weight: medium;
}

h1 {
    font-weight: 800;
}

.nike-logo,
.puma-logo,
.adidas-logo {
    width: 60px;
}

#home-section {
    background: black;
}

.hero-image {
    height: 700px;
    justify-content: center;
}
</style>
