import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom'
import Loader from "../Loader";
import useAuth from "../../Hooks/useAuth";
import commonRoutes from '../../Routes/commonRoutes'
import adminRoutes from '../../Routes/adminRoutes'
import userRoutes from '../../Routes/userRoutes'
const MainContent = () => {
    const { user } = useAuth()
    let myRoutes = {
        adminRoutes : adminRoutes,
        userRoutes: userRoutes
    }
    let routes = [...myRoutes[`${user.type}Routes`] , ...commonRoutes]
  return (
            <Suspense fallback={<Loader />}>
                <Routes>
                    {routes.map((route, index) => {
                        return (
                            route.element && (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.element />}
                                />
                            )
                        )
                    })}
                </Routes>
            </Suspense>
  )
}

export default MainContent