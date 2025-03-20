import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Library } from "./pages/Library/Library";
import { Details } from "./pages/Details/Details";
import { Header } from "./layouts/Header/Header";
import { SideNavigation } from "./layouts/SideNavigation/SideNavigation";

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          element={
            <>
              <Header />
              <SideNavigation />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />

          <Route path="/library/:type/:list?/:page?" element={<Library />} />

          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
