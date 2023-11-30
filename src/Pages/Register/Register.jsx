
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProviders";
import { data } from "autoprefixer";



const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';

    const onSubmit = (data) => {
        if (!data.terms) {
            // Handle the case where terms are not accepted
            Swal.fire({
                icon: 'error',
                title: 'Terms and Conditions',
                text: 'Please accept the terms and conditions.',
            });
            return;
        }
    
        console.log(data);

        createUser(data.email, data.password)
        .then((result) => {
            console.log(result);
            handleUpdateUser(data.name, data.photoURL);
            navigate(from, { replace: true });
        })
        .catch((error) => {
            console.error(error);
            // Add proper error handling for user creation
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'An error occurred during user creation.',
            });
        });
};

    const handleUpdateUser = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo,
        };
        console.log(profile);

        updateUserProfile(profile)
            .then(() => {
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    role: data.userType,
                    photo: data.photoURL,
                };
                axiosPublic
                    .post('/users', userInfo)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            navigate('/');
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        // Add proper error handling for user registration
                        Swal.fire({
                            icon: 'error',
                            title: 'Registration Error',
                            text: 'An error occurred during user registration.',
                        });
                    });
            })
            .catch((error) => {
                console.error(error);
                // Add proper error handling for profile update
                Swal.fire({
                    icon: 'error',
                    title: 'Profile Update Error',
                    text: 'An error occurred during profile update.',
                });
            });
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>DeliveryTiger-Register</title>
            </Helmet>

            <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="bg-[#c6bee2] container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl shadow-2xl">
                    <div className="md:w-1/2 w-full ">
                        <div className="card flex-shrink-0 w-full">
                            <h2 className="text-center text-3xl font-bold">Register Now</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                {/* name box */}
                                <div className="form-control">
                                    <label className="label">Name</label>
                                    <input
                                        type="text"
                                        {...register('name', { required: true })}
                                        name="name"
                                        placeholder="Your Name"
                                        className="input input-bordered"
                                        required
                                    />
                                    {errors.name && <span className="error-message">Name is required</span>}
                                </div>
                                {/* photo box */}
                                <div className="form-control">
                                    <label className="label">Phot URL</label>
                                    <input
                                        type="text"
                                        {...register('photo', { required: true })}
                                        name="photo"
                                        placeholder="Your Photo URL"
                                        className="input input-bordered"
                                        required
                                    />
                                    {errors.photo && <span className="error-message">Photo URL is required</span>}
                                </div>
                                {/* user type dropdown */}
                                <div className="form-control">
                                    <label className="label">User Type</label>
                                    <select
                                        {...register('userType', { required: true })}
                                        name="userType"
                                        className="input input-bordered"
                                        required
                                    >
                                        <option value="user">User</option>
                                        <option value="deliveryman">Deliveryman</option>
                                    </select>
                                    {errors.userType && <span className="error-message">User Type is required</span>}
                                </div>
                                {/* email box */}
                                <div className="form-control">
                                    <label className="label">Email</label>
                                    {errors.email && <span className="error-message">Email is required</span>}
                                    <div className='indicator w-full flex-col'>
                                        <span className="indicator-item badge bg-[#5b4d91] text-white border-none">Required</span>
                                        <input
                                            type="email"
                                            {...register('email', { required: true })}
                                            name="email"
                                            placeholder="Your Email"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* password box */}
                                <div className="form-control">
                                    <label className="label">Password</label>
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have 1 uppercase, 1 lowercase, and 1 special character</p>}
                                    <div className='indicator w-full flex-col'>
                                        <span className="indicator-item badge bg-[#5b4d91] text-white border-none">Required</span>
                                        <input
                                            type="password"
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })}
                                            placeholder="password"
                                            className="input input-bordered"
                                        />
                                    </div>
                                </div>
                                {/* terms and condition  */}
                                <div className="mb-3 mt-3">
                                    <input
                                        type="checkbox"
                                        {...register('terms', { required: true })}
                                        id="terms"
                                    />
                                    <label className="ml-2 font-medium" htmlFor="terms">
                                        Accept Our <a className="text-[#E21B70]" href="">Terms and condition</a>
                                    </label>
                                </div>

                                {/* register btn  */}
                                <div className="mt-6 form-control">
                                    <button className=" bg-[#5b4d91] hover:bg-[#5b4d91] px-10 hover:text-white text-white font-bold text-lg py-2 rounded-lg shadow-2xl duration-300">Register</button>
                                </div>
                                {/* login toggle */}
                                <div className='text-center  mt-6'>
                                    <div>
                                        <p className='text-sm'>Have an Account? <Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button></Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Right part */}
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mb-8 md:text-start text-center ml-14'>Welcome to <span className='text-[#5b4d91]font-bold italic'>DeliveryTiger</span></h1>
                        <img src="https://i.ibb.co/j8gSHcV/Forms-amico.png" alt="About Us Image" className="md:w-10/12 object-cover ml-14" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
