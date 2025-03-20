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
import { SideNavigationProvider } from "./contexts/SideNavigationProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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

          <Route path="/library/:type" element={<Library />} />

          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <SideNavigationProvider>
        <RouterProvider router={router} />
      </SideNavigationProvider>
    </QueryClientProvider>
  );
};

export default App;
