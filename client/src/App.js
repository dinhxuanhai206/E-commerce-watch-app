import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import LayoutSign from "./layout/LayoutSign/LayoutSign";
import { PrivateRoutes, PublicRoutes } from "./routes";

function App() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = DefaultLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {PrivateRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = LayoutSign;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            >
              {route.children
                ? route.children?.map((children, i) => {
                    const Children = children.component;
                    return (
                      <Route
                        key={i}
                        path={`${children.path}`}
                        element={<Children />}
                      />
                    );
                  })
                : null}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
