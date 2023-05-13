import { lazy } from 'react'

const Dashboard = lazy(() => import('../Pages/Common/Dashboard'))
const Login = lazy(() => import('../Pages/Common/Login'))

const commonRoutes = [
  
    { path:'/', exact: true, name: 'Dashboard', element: Dashboard },
    { path:'/login', exact: true, name: 'Login', element: Login },
]

export default commonRoutes 