import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import useAdmin from "../../hooks/useAdmin";
import { Helmet } from "react-helmet";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { FaBook, FaDonate, FaImage, FaPaypal, FaProductHunt, FaServicestack, FaUser } from "react-icons/fa";
import Footer from "../../Pages/Shared/Footer/Footer";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    // const isAdmin = false;
    // const isInstructor = true;
    const [isAdmin, isdeliveryman] = useAdmin();
    // console.log(isAdmin, isdeliveryman);


    return (
        <div>
            <Helmet>
                <title>ShuterBugs | Dashboard</title>
            </Helmet>
            <Navbar></Navbar>
          
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-10">
                    <label htmlFor="my-drawer-2" className=" drawer-buttona lg:hidden absolute right-0 bottom-0">open side bar</label>

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        <div className="p-4">
                            <div className="text-center">
                                <img className="w-20 h-20 rounded-full mx-auto mb-2" src={user.photoURL} alt="Profile" />
                                {user && (
                                    <>
                                        <h4 className="text-lg font-bold pb-2">
                                            {user.displayName}{' '}
                                            {isAdmin ? (
                                                <span className='bg-green-600 text-white font-semibold text-xs px-2 py-1 rounded-full'>Admin</span>
                                            ) : isdeliveryman ? (
                                                <span className='bg-blue-600 text-white font-semibold text-xs px-2 py-1 rounded-full'>Delivery Men</span>
                                            ) : (
                                                <span className='bg-purple-700 text-white font-semibold text-xs px-2 py-1 rounded-full'>User</span>
                                            )}
                                        </h4>
                                        <p className="text-gray-600 ">{user.email}</p>

                                    </>
                                )}
                            </div>
                        </div>
                        <hr className='border-2 border-purple-600' />

                        {
                            isAdmin && (<>
                                <li> <Link to="/dashboard/allDeliveryMen"><FaServicestack></FaServicestack> All Delivery Men</Link> </li>
                                <li> <Link to="/dashboard/allParcels"><FaPaypal></FaPaypal> All Parcels</Link> </li>
                                <li> <Link to="/dashboard/allUsers"><FaUser></FaUser> All Users</Link> </li>
                                

                            </>
                            )
                        }

                        {isdeliveryman && (
                            <>
                                <li> <Link to="/dashboard/deliverylist"><FaDonate></FaDonate> My Delivery List</Link> </li>
                            </>
                        )}
                        {!isAdmin && !isdeliveryman && (<>
                            <li> <Link to="/dashboard/bookParcel"><FaBook></FaBook> Book A Parcel</Link> </li>
                            <li> <Link to="/dashboard/myParcels"><FaProductHunt></FaProductHunt> My Parcels</Link> </li>
                            <li> <Link to="/dashboard/myProfile"><FaImage></FaImage> My Profile</Link> </li>
                            

                        </>
                        )
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;