import { createBrowserRouter } from "react-router-dom";
import SignInSide from "../pages/sign-in/sign-in.component";
import Dashboard from "../pages/dashboard/dashboard.component";
import App from "../App";
import { Trainers } from "../pages/trainers/trainers.component";
import { AccountStatement } from "../pages/account-statement/account-statement.component";
import { Settings } from "../pages/settings/settings.component";
import { EditTrainerInfo } from "../pages/edit-trainer-info/edittrainerinfo.component";
import { AddTrainer } from "../pages/add-trainer/addtrainer.component";
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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tariners",
        element: <Trainers />,
      },
      
      {
        path: "/account-statement",
        element: <AccountStatement />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/edit-trainer",
        element: <EditTrainerInfo />,
      },
      {
        path: "/add-trainer",
        element: <AddTrainer />,
      },
    ],
  },
]);
