import Home from '../pages/Home'
import Header from '../components/header';

const webRoutes = [
    { path: '/', component: Home},
    { path: '/about', component: Header, layout: 'about' },
];

export { webRoutes }