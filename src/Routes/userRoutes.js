import { lazy } from 'react'

const NotFound = lazy(() => import('../Pages/Common/NotFound'))

const userRoutes = [  

    { path: '/*', exact: false, name: 'notfound', element: NotFound },
]

export default userRoutes