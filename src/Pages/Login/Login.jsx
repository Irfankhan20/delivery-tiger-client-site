import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Provider/AuthProviders';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';




const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [showPassword, setShowPassword] = useState(false);
    const { register, formState: { errors } } = useForm();
    
   

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginDetails = { email, password };
        console.log(loginDetails);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "User Login Successfull",
                    showClass: {
                        popup: `animate__animated animate__fadeInUp  animate__faster `
                    },
                    hideClass: {
                        popup: ` animate__animated animate__fadeOutDown animate__faster `
                    }
                });
                navigate(from, { replace: true });
            })

    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    

    return (
        <div className="">
            <Helmet>
                <title>DeliveryTiger | Login</title>
            </Helmet>
            <div className=' my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="bg-[#c6bee2] container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                    {/* left  part  */}
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-[#5b4d91] font-bold italic'>DeliveryTiger</span></h1>
                        <img src="https://i.ibb.co/P9rT3j5/login-3-removebg-preview.png" alt="About Us Image" className="md:w-10/12 shadow-xl object-cover " />

                    </div>

                    {/* right part */}
                    <div className="md:w-1/2 w-full ">
                        <div className="card flex-shrink-0 w-full">
                            <h2 className="text-center  text-3xl font-bold">Login Now</h2>
                            <form onSubmit={handleLogin} className="card-body">
                                {/* email input box */}
                                <div className="form-control">
                                    <label className="label">Email</label>
                                    <input
                                        type="email"
                                        {...register('email', { required: true })}
                                        name="email"
                                        placeholder="Your Email"
                                        className="input input-bordered"
                                        required
                                    />
                                    {errors.email && <span className="error-message">This field is required</span>}
                                </div>

                                {/* password input box */}

                                <div className="form-control">
                                    <label className="label">Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        {...register('password', { required: true })}
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label">
                                        <small>
                                            <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} /> Show Password
                                        </small>
                                    </label>
                                    {errors.password && <span className="error-message">This field is required</span>}
                                    {/* forgot password box */}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {/* captcha input box */}
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />

                                </div>


                                {/* login button  */}
                                <div className="form-control mt-6">
                                    <input disabled={disabled} className="btn py-2 text-white bg-[#5b4d91] hover:bg-[#5b4d91]" type="submit" value="Login" />
                                </div>



                                <div className="text-center mt-6">
                                    <p className="text-lg divider">Or Connect With</p>
                                    <div className="my-4">
                                        <SocialLogin></SocialLogin>
                                        
                                    </div>
                                    <div>
                                        <p className="text-sm">
                                            New to <span className="font-semibold text-[#5b4d91]">DeliveryTiger</span>?
                                            <Link to="/register">
                                                <button className="btn btn-active btn-link normal-case text-sm text-sky-700">Registration Here</button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;