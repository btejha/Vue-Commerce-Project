import {createApp} from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import shoppingCartPage from "@/pages/ShoppingCartPage";
import productPage from "@/pages/ProductPage";
import productDetailPage from "@/pages/ProductDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";


createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHistory(process.env.BASE_URL),
        routes: [
            {
                path: '/cart',
                component: shoppingCartPage,
            },
            {
                path: '/products',
                component: productPage,
            },
            {
                path: '/products/:productId',
                component: productDetailPage,
            }, {
                path: '/:pathMatch(.*)*',
                component: NotFoundPage,

            }]
    }))

    .mount('#app')
