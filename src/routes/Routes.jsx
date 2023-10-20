import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AddCart from "../pages/addCart/AddCart";
import MyCart from "../pages/myCart/MyCart";
import BrandDetails from "../pages/BrandDetails/BrandDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/motos')
        },
        {
          path: '/details/:id',
          element: <BrandDetails></BrandDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/motos/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element: <Signup></Signup>
        },
        {
          path: '/addproduct',
          element: <PrivateRoute><AddCart></AddCart></PrivateRoute>
        },
        {
          path: '/mycart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;