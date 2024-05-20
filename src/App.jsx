import { singlePageLoader } from "./lib/loaders";
import HomePage from "./routes/HomePage/HomePage";
import { Layout, RequireAuth } from "./routes/Layout/Layout";
import ListPage from "./routes/ListPage/ListPage";
import Login from "./routes/Login/Login";
import NewPostPage from "./routes/NewPostPage/NewPostPage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import Register from "./routes/Register/Register";
import SinglePage from "./routes/SinglePage/SinglePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Adding navigation with by using react-router-dom element Layout is the first object layout wrapping other object elements as children in this layout authentication is not required everybody can visit these pages

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

          // renders when data is fetched from db
          loader: singlePageLoader,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },

    // My second layout containing protected routes that require authentication
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/addPost",
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppPage;
