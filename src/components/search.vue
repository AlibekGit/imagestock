<template>
    <div>
        <div class="search">
            <div class="row">
                <div class="col s12 center">
                    <div class="input-field col s6 offset-s3">
                        <h2>Поиск</h2>
                        <input type="search" class="center" v-model="search" @click.prevent="showImages">
                    </div>
                </div>
                <div class="col s6 offset-s3 search__tags">
                    <ul class="search__tags-list">
                        <li>Wallpapers</li>
                        <li>Textures & Patterns</li>
                        <li>Nature</li>
                        <li>Current events</li>
                        <li>Architecture</li>
                        <li>Bussiness & Work</li>
                        <li>Film</li>
                        <li>Animals</li>
                        <li>Travel</li>
                        <li>Fashion</li>
                        <li>Food & Drink</li>
                        <li>Spirituality</li>
                        <li>Experimental</li>
                        <li>People</li>
                        <li>Health</li>
                        <li>Arts & Culture</li>
                    </ul>
                </div>

            </div>

        </div>
        <div class="row photos container">
            <div class="col s12 photos__wrapper ">
                <masonry :cols="{default: 3, 1000: 2, 700: 1}"
                         :gutter="{default: '30px'}"
                >
                    <div    class="photos__items center-align"
                            v-for="(photo,photoId) in photos"
                            :key="photo.id"
                    >
                        <img
                                class="responsive-img photos__link"
                                :src="photo.urls.small"
                        />
                        <div class="photos__hover">
                            <div><img :src="photo.user.profile_image.medium" class="photos__hover-image"></div>
                            <p style="margin-bottom: 0">{{photo.user.name}}</p>
                            <span>@{{photo.user.instagram_username}}</span>
                            <div class="photos__hover-icons" @click="showPhotoPage(photo)">
                                <i class="material-icons">favorite</i>
                                <router-link tag="i" class="material-icons"  style="cursor: pointer" :to="'/photopage/'+photo.id" >zoom_out_map</router-link>
                                <i class="material-icons">file_download</i>
                            </div>
                        </div>
                    </div>
                </masonry>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data:()=>({
            search : null
        }),
        computed:{
            photos(){
                return this.$store.getters.photos
            }
        },
        methods:{
            showImages(){
                const url = 'https://api.unsplash.com/search/photos?page=1&per_page=15&query='
                    + this.search + '&client_id=if5yQFOqmjDjCQDeqcUKfSl2FlNFeYx86sB6PX78fno'
                const history = this.search
                this.$store.dispatch('createHistoryList',history)
                this.$store.dispatch('photosList', url)
            },
            addFavorite(photo){
                let favoritesUrls = photo.urls.regular
                this.$store.dispatch('createFavoritesList',favoritesUrls)
            },
            showPhotoPage(photo){
                let photoPageUrl = photo
                this.$store.dispatch('photoPageUrls',photoPageUrl)
            }
        }
    }
</script>

<style scoped lang="scss">
    .search{
        background-color: black;
        height: 250px;
        &__input{
            font-size: 72px;
        }
        &__tags-list{
            display: flex;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            li{
                padding-right: 15px;
            }
        }
    }



    .photos{
        margin-top: 80px;
        &__wrapper{

         }
        &__items{
            position: relative;
            overflow: hidden;
            margin-top: 30px;
         }
        &__link{
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 0 8px 0;
            width: 100%;
            height: 100%;
         }
        &__hover{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            position: absolute;
            border-radius: 8px;
            width: 100%;
            height: 99%;
            top: -100%;
            transition: 0.3s;
            backdrop-filter: blur(3px);
            background: rgba(40, 36, 22, 0.5);
        }
        .photos__items:hover .photos__hover{
            top: 0;
        }
        &__hover-image{
            border: 1px solid #FFFFFF;
            border-radius: 8px;
        }
        &__hover-icons{
            display: flex;
            justify-content: center;
            margin-top: 10%;
        }
        &__hover-icons i:nth-child(2n){
            padding: 0 50px;
        }
    }
</style>
