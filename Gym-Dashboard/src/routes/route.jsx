import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/home/home.component";
import SignInSide from "../pages/sign-in/sign-in.component";

import { Mail } from "../pages/mail/mail.component";
import Dashboard from "../pages/dashboard/dashboard.component";
import App from "../App";
import { Trainers } from "../pages/trainers/trainers.component";
import { AccountStatement } from "../pages/account-statement/account-statement.component";
import { Devices } from "../pages/devices/devices.component";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,

    children: [
      {
        path: "/",
        element: <SignInSide />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tariners",
        element: <Trainers />,
      },
      {
        path: "/mail",
        element: <Mail />,
      },
      {
        path: "/account-statement",
        element: <AccountStatement />,
      },
      {
        path: "/devices",
        element: <Devices />,
      },
    ],
  },
]);
