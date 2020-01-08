import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import ActiveCode from "../pages/Auth/ActiveCode";

export const routersAuth = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/active-code',
        component: ActiveCode
    }
];