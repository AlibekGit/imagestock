<template>
    <div class="navbar-fixed">
        <nav class="black">
            <div class="nav-wrapper container hide-on-med-and-down">
                <router-link tag="a" to="/" class="brand-logo">
                    <img src="../assets/Vector.png" alt="Logo">
                    ImageStock
                </router-link>
                <ul class="right">
                    <li><router-link class="nav-link" exact active-class="active" tag="a" to="/"><i class="material-icons left">search</i>Поиск</router-link></li>
                    <li><router-link class="nav-link" active-class="active" tag="a" to="/favorite"><i class="material-icons left">favorites</i>Избранное</router-link></li>
                    <li><router-link class="nav-link" active-class="active" tag="a" to="/history"><i class="material-icons left">history</i>История поиска</router-link></li>
                </ul>
            </div>
            <div class="nav-wrapper hide-on-large-only">
                <a class="brand-logo left">
                    <img src="../assets/Vector.png" alt="Logo">
                </a>
                <ul class="right">
                    <li><router-link class="nav-link" exact active-class="active" tag="a" to="/"><i class="material-icons ">search</i></router-link></li>
                    <li><router-link class="nav-link" active-class="active" tag="a" to="/favorite"><i class="material-icons ">favorites</i></router-link></li>
                    <li><router-link class="nav-link" active-class="active" tag="a" to="/history"><i class="material-icons ">history</i></router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped lang="scss">
    .nav-link::after{
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: white;
        transition: width .3s;
    }
    .nav-link:hover::after{
        width: 100%;
        transition: width .3s;
    }
    .nav-link.active:after{
        width: 100%;
        height: 2px;
        background-color: white;
    }
</style>
