//? external imports
import { createBrowserRouter } from "react-router-dom";

//? internal imports
import { Root } from "../pages/Root.tsx";
import { Home } from "../pages/Home.tsx";
import { Foods } from "../pages/Foods/index.tsx";
import { FoodDetail } from "../pages/Foods/FoodDetail.tsx";
import { Contact } from "../pages/Contact.tsx";
import { Login } from "../pages/Login.tsx";
import { Signup } from "../pages/Signup.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/foods',
        element: <Foods />,
        children: [
            {
                path: ':id',
                element: <FoodDetail />
            }
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ],
  },
]);
