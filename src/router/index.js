import {createRouter, createWebHashHistory} from "vue-router"
const routes = [
    {
        name:"Home",
        path:"/",
        component: () => import("../views/Home.vue")
    },
    {
        name:"HousePage",
        path:"/houses",
        meta:{ component: "houses"},
        component: () => import("../components/SearchList.vue")
    },
    {
        name:"Houses",
        path:"/houses/:name",
        component: () => import("../views/Houses.vue"),
    },
    {
        name:"PersonPage",
        path:"/persons/",
        meta:{ component: "characters"},
        component: () => import("../components/SearchList.vue")
    },
    {
        name:"Persons",
        path:"/persons/:name",
        component: () => import("../views/Persons.vue")
    },
    {
        name:"Quotes",
        path:"/quotes",
        component: () => import("../views/Quotes.vue")
    },
    {
        name:"Search",
        path:"/search",
        component: () => import("../components/SearchList.vue")
    }
]

export default createRouter({
    routes,
    history: createWebHashHistory()
})