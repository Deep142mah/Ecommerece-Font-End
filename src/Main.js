import React, { useContext, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Loader from "./Components/Loader";
import AuthContext from "./Contexts/AuthContext";
import AuthGuard from './Auth/AuthGuard'
// css
import './Assets/styles/style.css'

const MainLayout = lazy(() => import("./Layout/MainLayout"));
const DefaultLayout = lazy(() => import("./Layout/DefaultLayout"));

function Main() {
  const {isAuthenticated,user  }  = useContext(AuthContext)
  console.log(isAuthenticated,user,'app')
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {(isAuthenticated && (
            <Route
              path={`/${user?.type}/*`}
              exact={true}
              name={user?.type}
              element={
                <AuthGuard>
                  <MainLayout />
                </AuthGuard>}
            />
          )) || 
              <Route 
              path={`/user/*`}
              name="User Page"
              exact={true}
              element={<DefaultLayout />}
              />}
            <Route
              path={`*`}
              name="Check Page"
              element={
                isAuthenticated ? (
                  <Navigate replace to={`/${user.type}/`} />
                  ) : (
                  <Navigate replace to={`/user/`} />
                )
              }
            />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Main;
