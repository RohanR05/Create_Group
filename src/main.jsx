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

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:999/create"),
        Component: Home,
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
        loader: () => fetch("http://localhost:999/create"),
        Component: AllGroup,
      },
      {
        path: "createGroup",
        Component: CreaterGroup,
      },
      {
        path: "myGroups",
        loader: () => fetch("http://localhost:999/create").then(res => res.json()),
        Component: MyGorups,
      },
      {
        path: "groupDetails/:id",
        loader: () => fetch("http://localhost:999/create"),
        Component: GroupDetails,
      },
      {
        path:'groupDetailsCard',
        Component: GroupDetailsCard
      }
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
