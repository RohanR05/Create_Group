import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Layout/RootLayout.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import AuthProvider from "./Auth/AuthProvider.jsx";
import AllGroup from "./Pages/AllGroup/AllGroup.jsx";
import CreaterGroup from "./Pages/CreateGroup/CreaterGroup.jsx";
import MyGorups from "./Pages/MyGroup/MyGorups.jsx";
import GroupDetails from "./Pages/AllGroup/GroupDetails.jsx";
import GroupDetailsCard from "./Pages/AllGroup/GroupDetailsCard.jsx";
import Home from "./Pages/Home/Home.jsx";
import Loading from "./Components/Loading.jsx";

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
          fetch("https://server-site-kappa.vercel.app/create").then((res) =>
            res.json()
          ),
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
