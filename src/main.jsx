import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Layout/RootLayout.jsx";
import Home from "./Components/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import AuthProvider from "./Auth/AuthProvider.jsx";
import AllGroup from "./Components/AllGroup.jsx";
import CreaterGroup from "./Components/CreaterGroup.jsx";
import MyGorups from "./Components/MyGorups.jsx";
import GroupDetails from "./Pages/GroupDetails.jsx";
import GroupDetailsCard from "./Pages/GroupDetailsCard.jsx";
import Loading from "./Pages/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://server-site-kappa.vercel.app/create"),
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "allGroups",
        loader: () => fetch("https://server-site-kappa.vercel.app/create"),
        Component: AllGroup,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "createGroup",
        Component: CreaterGroup,
      },
      {
        path: "myGroups",
        loader: () =>
          fetch("https://server-site-kappa.vercel.app/create").then((res) => res.json()),
        Component: MyGorups,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "groupDetails/:id",
        loader: () => fetch("https://server-site-kappa.vercel.app/create"),
        Component: GroupDetails,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "groupDetailsCard",
        Component: GroupDetailsCard,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
