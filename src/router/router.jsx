import { createBrowserRouter } from "react-router"
import RootLayout from "../layout/RootLayout"
import Home from "../Pages/Home/Home"
import AuthLayout from "../layout/AuthLayout"
import Login from "../Pages/Authentication/Login/Login"
import Registration from "../Pages/Authentication/Registration/Registration"
import Coverage from "../Pages/Coverage/Coverage"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: 'coverage', Component: Coverage }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            { path: 'login', Component: Login },
            { path: 'registration', Component: Registration },
            
        ]
    }
])

