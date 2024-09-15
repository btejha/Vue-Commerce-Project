import {createApp} from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import shoppingCartPage from "@/pages/ShoppingCartPage";
import productPage from "@/pages/ProductPage";
import productDetailPage from "@/pages/ProductDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDFmrgbXSKtc-zA0BgMVuEvcsNknYU_4ew",
    authDomain: "vue-commerce-project.firebaseapp.com",
    projectId: "vue-commerce-project",
    storageBucket: "vue-commerce-project.appspot.com",
    messagingSenderId: "904939754779",
    appId: "1:904939754779:web:1a9d93fb82802a43666fbe",
    measurementId: "G-F3T3YZM06B"
};

initializeApp(firebaseConfig);
// getAnalytics(app);

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
            path: '/',
                redirect: '/products',
            }
            ,{
                path: '/:pathMatch(.*)*',
                component: NotFoundPage,
            }]
    }))

    .mount('#app')
