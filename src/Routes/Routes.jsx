import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrrorPage";
import BookAParcel from "../Pages/Dashboard/UserDashboard/BookAParcel";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyParcels from "../Pages/Dashboard/UserDashboard/MyParcels";
import MyProfile from "../Pages/Dashboard/UserDashboard/myProfile";
import MyDeliveryList from "../Pages/Dashboard/DeliveryMenDashboard/MyDeliveryList";
import AllDeliveryMen from "../Pages/Dashboard/AdminDashboard/AllDeliveryMen";
import AllParcels from "../Pages/Dashboard/AdminDashboard/AllParcels";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
import BookingInfoUpdate from "../Pages/Dashboard/UserDashboard/BookingInfoUpdate";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }

    ]
},
{
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        //normal user routes
        {
            path: 'bookParcel',
            element: <BookAParcel></BookAParcel>
        },
        {
            path: 'myParcels',
            element: <MyParcels></MyParcels>
        },
        {
            path: 'myProfile',
            element: <MyProfile></MyProfile>
        },
        {
            path: 'updateItem/:id',
            element: <BookingInfoUpdate></BookingInfoUpdate>
        },

        //delivery men routes
        {
            path: 'deliverylist',
            element: <MyDeliveryList></MyDeliveryList>
        },

        //admin routes
        {
            path: 'allDeliveryMen',
            element: <AllDeliveryMen></AllDeliveryMen>
        },
        {
            path: 'allParcels',
            element: <AllParcels></AllParcels>
        },
        {
            path: 'allUsers',
            element: <AllUsers></AllUsers>
        }
    ]
}
]);