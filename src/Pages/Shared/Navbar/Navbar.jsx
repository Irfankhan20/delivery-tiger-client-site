
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProviders';


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
  
 const navOptions = <>

        <li>
        <NavLink to="/" className="normal-case text-xl text-white" activeClassName="active">Home</NavLink>
        </li>

        <li>
            <NavLink to="/dashboard" className="text-white hover:text-gray-300" activeClassName="active">
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink to="/classes" className="text-white hover:text-gray-300" activeClassName="active">
                Classes
            </NavLink>
        </li>
        {user ? (
                                    <div className="flex items-center">
                                        <Link to="/profile">
                                        <button className='flex items-center'>
                                            <img className=' rounded-full w-8 h-8 mr-3' src={user.photoURL} alt={user.displayName} />
                                            <span data-tip={user.displayName} className="text-white">{user.displayName}</span>
                                        </button>
                                        </Link>

                                        <button onClick={handleLogOut} className="text-xl text-white px-3 font-medium ml-3">
                                            Logout
                                        </button>


                                    </div>
                                ) : (
                                    <NavLink to="/login"
                                        className="text-white" activeClassName="active">
                                        <button className="text-xl px-3 font-medium">
                                            Login
                                        </button>
                                    </NavLink>
                                )}
        
</>

    return (
        <div>
            <nav className="flex items-center justify-between px-4  md:z-10 w-full bg-[#9684d6] ">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="https://i.ibb.co/d0vDy7f/Screenshot-1-removebg-preview.png" alt="Logo" className="h-20" />

                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        // onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center">
                    <ul className="flex items-center space-x-4">
                        {navOptions}
                    </ul>
                </div>

                
            </nav>

        </div>
    );
};

export default Navbar;