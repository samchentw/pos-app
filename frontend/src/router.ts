import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Vue from 'vue';

import IndexLayout from './pages/Index/Layouts/Layout.vue';
import IndexPage from './pages/Index/Index.vue';
import IndexCheckout from './pages/Index/Checkout.vue';

import SettingLayout from './pages/Setting/Layout.vue';
import SettingIndex from './pages/Setting/Index.vue';


const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/index/home' },
    {
        path: '/index',
        component: IndexLayout,
        children: [
            { path: 'home', component: IndexPage },
            { path: 'checkout', component: IndexCheckout },
            // { path: 'calendar', component: IndexCalendar },
            // { path: 'list', component: IndexList }
        ],
    },
    {
        path: '/setting',
        component: SettingLayout,
        children: [
            { path: 'index', component: SettingIndex },
        ],
    },
];


export const routers = createRouter({
    routes,
    history: createWebHashHistory(),
});
