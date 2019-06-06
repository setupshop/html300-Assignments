<template>
    <div class="app">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container">
                <a href="index.html" class="navbar-brand">Shoe Store</a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a href="home.vue" class="nav-link">Home</a>

                            <li class="nav-item active">
                            <a href="home.vue" class="nav-link">About</a>

                            <li class="nav-item active">
                            <a href="home.vue" class="nav-link">Products</a>

                            <li class="nav-item active">
                            <a href="home.vue" class="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        </div>
</template>

<script>
export default {
    name: 'navigation',
    
}
</script>

<style scoped>

.navbar-brand {
    font-weight: 600;

}

.navbar .nav-link {
    font-size: 15px;
    padding-left: 1rem;
    padding-right: 1rem;
}


    
</style>