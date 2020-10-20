<template>
    <div class="container">
        <div class="row">
            <div class="col s12 center-align">
                <h1>History</h1>
                <router-link to="/">
                    <button class="btn">Back to search</button>
                </router-link>
                <router-link to="/favorite">
                    <button class="btn">Favorites</button>
                </router-link>
                <div v-if="historys.length" class="history">
                    <h1>Last Recently</h1>
                    <hr>
                    <ul v-for="(history,hisId) in historys">
                        <li class="history__items">
                            <h2>{{hisId+1}}</h2>
                            <h2>{{history}}</h2>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <h3>No History List</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "history",
        computed:{
            historys(){
                return this.$store.getters.historys
            }
        }
    }
</script>

<style scoped lang="scss">
    .history{


        &__items{
            display: flex;
            h2{
                border: 2px solid #000000;
                margin-right: 1px;
            }
        }
    }
</style>
