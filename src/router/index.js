import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import GetStarted from '../views/GetStarted.vue';
import LeaveMeeting from '../views/LeaveMeeting.vue';
import PreConferencePage from '../views/PreConferencePage.vue';
import ConferencePage from '../views/ConferencePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/login',
    name: 'Log In',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
  {
    path: '/get-started',
    name: 'Get Started',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GetStarted,
  },
  {
    path: '/leave-meeting',
    name: 'Leave Meeting',
    component: LeaveMeeting,
  },
  {
    path: '/join-meeting',
    name: 'Join Meeting',
    component: PreConferencePage,
  },
  {
    path: '/meeting',
    name: 'Meeting',
    component: ConferencePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

export default router;
