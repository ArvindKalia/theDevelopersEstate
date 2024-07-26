import HomePage from "./routes/homePage/homePage.jsx"
import ListPage from "./routes/listPage/listPage.jsx";
import {Layout, RequireAuth} from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./routes/register/register.jsx";
import Login from "./routes/login/login.jsx";

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<HomePage />
        },
        {
          path:"/list",
          element:<ListPage />
        },
        {
          path:"/:id",
          element:<SinglePage />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/register",
          element:<Register />
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth />,
      children:[
        {
          path:"/profile",
          element:<ProfilePage />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App