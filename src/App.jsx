import HomePage from "./routes/HomePage/HomePage";
import Layout from "./routes/Layout/Layout";
import ListPage from "./routes/ListPage/ListPage";
import Login from "./routes/Login/Login";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Register from "./routes/Register/Register";
import SinglePage from "./routes/SinglePage/SinglePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Adding navigation with by using react-router-dom element Layout is the first object wrapping other object elements as children

const AppPage = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppPage;
