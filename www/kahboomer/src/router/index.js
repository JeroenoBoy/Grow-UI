import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: () => import('@/views/Dashboard.vue')
	},
	{
		path: '/Projects',
		name: 'DBM > Projects',
		meta: {
			title: 'Home Page - Example App'
		},
		component: () => import('@/views/Projects.vue')
	}
];

const router = new VueRouter({
	routes
});

export default router;
