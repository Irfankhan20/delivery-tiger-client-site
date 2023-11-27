import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";



const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'user'
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }
    return (
        <div className="p-8">
            
            <div>
                <button onClick={handleGoogleSignIn} className="px-4">
                    <img className="w-10" src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;