import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"


Vue.use(Vuex)


let store = new Vuex.Store({
    state:{
        favorites:[],
        historys:[],
        photos:[],
        forPhotoPage:[]
    },
    mutations:{
        createHistoryList(state,history){
            state.historys.push(history)
        },
        createFavoritesList(state,favoritesUrls){
            state.favorites.push(favoritesUrls)
        },
        photosList(state,url){
            axios.get(url)
                .then((response)=>{
                    state.photos=response.data.results
                })
                .catch((e)=>{
                    console.log(e)
                })
        },
        photoPageUrls(state,photoPageUrl){
            let ph = photoPageUrl
            state.forPhotoPage.splice(0,1,ph)
        }
    },
    actions:{
        createHistoryList({commit},history){
            commit('createHistoryList',history)
        },
        createFavoritesList({commit},favoritesUrls){
            commit('createFavorites',favoritesUrls)
        },
        photosList({commit},url){
            commit('photosList',url)
        },
        photoPageUrls({commit},photoPageUrl){
            commit('photoPageUrls',photoPageUrl)
        }

    },
    getters:{
        historys:s=>s.historys,
        favorites:s=>s.favorites,
        photos:s=>s.photos,
        photoPage:s=>s.forPhotoPage
    }
})





export default store;
