import { createWebHistory, createRouter } from "vue-router";

import Home      from '@/components/Home'
import Footer    from '@/components/shared/Footer'
import Header    from '@/components/shared/Header'


const routes = [
    {
        path: "/",
        name: "Home",
        components: {
            'default': Home,
            'header': Header,
            'footer': Footer,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;