import Vue from 'vue'
import Router from 'vue-router'




Vue.use(Router)

let router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'search',
            component:()=>import('./components/search')
        },
        {
            path:'/history',
            name:'history',
            component:()=>import('./components/history')
        },
        {
            path:'/favorite',
            name:'favorite',
            component:()=>import('./components/favorite')
        },
        {
            path:'/photopage/:id',
            name:'photopage',
            component:()=>import('./components/photoPage')
        }
    ]
})









export default router;
