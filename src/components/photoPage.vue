<template>
    <div>
        <div class="row photoPage" v-for="photo of photoPage" :style="{backgroundImage:`url(${photo.urls.full})`}">
            <div class="col s12 photoPage__blur">
                <div class="container">
                    <div class="photoPage__wrapper">
                        <div class="photoPage__info">
                            <img :src="photo.user.profile_image.medium" alt="profile" class="responsive-img">
                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
                                <span>{{photo.user.name}}</span>
                                <span>@{{photo.user.instagram_username}}</span>
                            </div>
                        </div>
                        <div class="photoPage__like">
                            <span class="favorite-icon"><i class="material-icons">favorite</i></span>
                            <span class="download-icon" style="cursor: pointer" @click="downloadPhoto(photo)" ><i class="material-icons">file_download</i><a :href="download_url" class="download-icon__link">Download</a></span>
                        </div>
                    </div>
                    <img :src="photo.urls.full" class="responsive-img" style="box-shadow: 0px 4px 100px #000000;" @load="photoTags(photo)">
                </div>
                <div class="container" style="padding: 50px 0">
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                        <p>Похожии теги </p>
                        <div>
                            <span v-for="tag of tags" class="photoPage__tags">{{tag.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "photoPage",
        data:()=>({
            tags:[],
            download_url:null
        }),
        computed:{
            photoPage(){
                return this.$store.getters.photoPage
            }
        },
        methods:{
            photoTags(photo){
                this.tags=photo.tags
            },
            downloadPhoto(photo){
                this.download_url = photo.links.download + '?force=true'
            }
        }
    }
</script>

<style scoped lang="scss">
    .responsive-img{
        border-radius: 8px;
    }
    .favorite-icon{
        background-color: #FFFFFF;
        color: #828282;
        border-radius: 8px;
        display: flex;
        padding: 10px;
    }
    .download-icon{
        background-color: rgba(33, 150, 83, 1);
        border: 1px solid rgba(33, 150, 83, 1);
        border-radius: 8px;
        padding: 10px;
        margin-left: 20px;
        display: flex;
        align-items: center;
        &__link{
        color: rgba(242, 242, 242, 1);
        }
    }

    .photoPage{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        &__blur{
            background: rgba(40, 36, 22, 0.01);
            backdrop-filter: blur(8px);
            width: 100%;
        }
        &__tags{
            background-color: #FFFFFF;
            padding: 5px 10px;
            color: #828282;
            border-radius: 8px;
            margin-right: 20px;
        }
        &__wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 40px 0;
        }
        &__like{
            display: flex;
        }
        &__info{
            display: flex;
        }
        &__info img{
            border-radius: 8px;
            border: 1px solid #FFFFFF;
        }
    }
</style>
