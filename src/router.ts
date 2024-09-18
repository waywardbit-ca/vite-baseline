import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import NotFound from './NotFound.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;