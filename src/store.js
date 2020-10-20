import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)


let store = new Vuex.Store({
    state:{
        favorites:[],
        historys:[]
    },
    mutations:{
        createHistoryList(state,history){
            state.historys.push(history)
        },
        createFavorites(state,favoritesUrls){
            state.favorites.push(favoritesUrls)
        }
    },
    actions:{
        createHistoryList({commit},history){
            commit('createHistoryList',history)
        },
        createFavorites({commit},favoritesUrls){
            commit('createFavorites',favoritesUrls)
        }
    },
    getters:{
        historys:s=>s.historys,
        favorites:s=>s.favorites
    }
})





export default store;
