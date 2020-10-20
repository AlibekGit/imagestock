<template>
    <div class="container">
        <div>
            <div class="row">
                <div class="col s8 offset-s2">
                    <h1>Unsplash App</h1>
                    <router-link
                            tag="button"
                            class="btn"
                            to="/history"
                    >
                        Show History
                    </router-link>
                    <router-link
                            tag="button"
                            class="btn"
                            to="/favorite"
                    >
                        Show Favorite
                    </router-link>
                    <nav>
                        <div class="nav-wrapper">
                            <form @submit.prevent="showImages">
                                <div class="input-field">
                                    <input id="search" type="search" v-model="handle" class="">
                                    <label active-class="active" class="label-icon" for="search"><i class="material-icons">search</i></label>
                                    <i class="material-icons" @click="handle=null">close</i>
                                    <button class="btn " type="submit">Show Images</button>
                                </div>
                            </form>

                        </div>
                    </nav>
                </div>

            </div>

        </div>
        <div class="row photos">
            <div class="col s12 photos__wrapper">
                <light-gallery
                        :images="images"
                        :index="index"
                        @close="index=null"
                />
                <div    class="photos__items center-align"
                        v-for="(photo,photoId) in photos"
                        :key="photoId"
                        @click="index=photoId"
                >
                    <i class="material-icons" @click="addFavorite(photo)">favorite_border</i>
                    <img
                            class="responsive-img photos__link"
                            :src="photo.urls.small"
                    />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "search",
        data:()=>({
            handle : null,
            photos: [],
            index:null,
            images:[]

        }),
        methods:{
            showImages(){
                const url = 'https://api.unsplash.com/search/photos?page=1&per_page=10&query='
                    + this.handle + '&client_id=if5yQFOqmjDjCQDeqcUKfSl2FlNFeYx86sB6PX78fno'
                const history = this.handle
                this.$store.dispatch('createHistoryList',history)
                axios.get(url)
                    .then((response)=>{
                        this.photos=response.data.results
                        this.images.splice(0,10)
                        this.photos.forEach((photo,index,array)=>{
                            array=photo.urls.regular
                            this.images.push(array)

                        })

                    })
            },
            addFavorite(photo){
                let favoritesUrls = photo.urls.regular
                this.$store.dispatch('createFavorites',favoritesUrls)
            }
        }
    }
</script>

<style scoped lang="scss">
    .photos{
        margin-top: 100px;
    &__wrapper{
         display: flex;
         flex-wrap: wrap;
        justify-content: center;
     }
    &__items{
         padding: 0 5px;
        width: 250px;

     }
    &__link{
         border: 3px solid #e57373;
        cursor: pointer;
     }
    }
</style>
