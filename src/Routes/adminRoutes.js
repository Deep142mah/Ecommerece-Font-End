import { lazy } from 'react'

const NotFound = lazy(() => import('../Pages/Common/NotFound'))



const adminRoutes = [
  

    { path: '/*', exact: false, name: 'notfound', element: NotFound },
]

export default adminRoutes