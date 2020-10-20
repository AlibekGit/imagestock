<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h1>Favorites pictures</h1>
                <router-link to="/">
                    <button class="btn">Back to search</button>
                </router-link>
                <router-link to="/history">
                    <button class="btn">Back history</button>
                </router-link>
                <div v-if="favorites.length" class="favorite">

                    <ul v-for="(fav,favId) in favorites" class="favorite__items">
                        <li>
                            <img :src="fav" class="responsive-img favorite__images materialboxed" ref="matbox">
                        </li>
                    </ul>

                </div>
                <p v-else>No favorites</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "favorite",
        computed:{
            favorites(){
                return this.$store.getters.favorites
            }
        },
        mounted(){
            M.Materialbox.init(this.$refs.matbox, {

            })
        }
    }
</script>

<style scoped lang="scss">
    .favorite{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &__items{

            width: 250px;
            padding: 0 5px;
        }
        &__images{
            border: 3px solid #e57373;
            cursor: pointer;
        }
    }
</style>
