import { lazy } from 'react';
import Loadable from '../components/Core/Loadable';
import AppLayout from '../components/AppLayout/AppLayout';
import DummyTest from '../pages/DummyTest/DummyTest';
import AccessForbidden from '../pages/403AccessForbidden/AccessForbidden';
// import UserAccount from '../pages/User/UserAccount';

const NotFound = Loadable(lazy(() => import('../pages/404NotFound/PageNotFound')));
const Login = Loadable(lazy(() => import('../pages/Authentication/JwtLogin')));

// dashboard page
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard/Dashboard')));
const Orders = Loadable(lazy(() => import('../pages/Orders/Orders')));
const User = Loadable(lazy(() => import('../pages/User/User')));
const Restaurant = Loadable(lazy(() => import('../pages/Restaurant/Restaurant')));
const Payment = Loadable(lazy(() => import('../pages/Payments/Payment')));
const PaymentCreate = Loadable(lazy(() => import('../pages/Payments/PaymentCreate')));
const Product = Loadable(lazy(() => import('../pages/Product/Product')));
const Category = Loadable(lazy(() => import('../pages/Category/Category')));
const Brand = Loadable(lazy(() => import('../pages/Brand/Brand')));
const Cart = Loadable(lazy(() => import('../pages/Cart/Cart')));

const Logout = (props) => {
    const { children } = props
    localStorage.removeItem('Token')
    localStorage.removeItem('User')
    return children
}

const routes = [
    {
        path: '/',
        element:
            <AppLayout>
                <Dashboard />
            </AppLayout>
    },
    {
        path: '/dashboard',
        element:
            <AppLayout>
                <Dashboard />
            </AppLayout>
    },
    { path: '/users', element: <AppLayout><User /></AppLayout> },
    // { path: '/user/account', element: <AppLayout><UserAccount /></AppLayout> },
    { path: '/orders', element: <AppLayout><Orders /></AppLayout> },
    { path: '/test', element: <AppLayout><DummyTest /></AppLayout> },
    { path: '/restaurants', element: <AppLayout><Restaurant /></AppLayout> },
    { path: '/product', element: <AppLayout><Product /></AppLayout> },
    { path: '/category', element: <AppLayout><Category /></AppLayout> },
    { path: '/brand', element: <AppLayout><Brand /></AppLayout> },
    { path: '/payments', element: <AppLayout><Payment /></AppLayout> },
    { path: '/paymentcreate', element: <AppLayout><PaymentCreate /></AppLayout> },
    { path: '/session/404', element: <NotFound /> },
    { path: '/session/403', element: <AccessForbidden /> },
    { path: '/session/signin', element: <Login /> },
    { path: '/logout', element: <Logout><Login /></Logout> },
    { path: '/cart', element: <AppLayout><Cart /></AppLayout>},
    { path: '*', element: <AppLayout><NotFound /></AppLayout> }
];


export default routes;