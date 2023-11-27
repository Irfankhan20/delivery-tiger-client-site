import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProviders";
import { useContext } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = async (data) => {
        console.log(data);
        
    };

    return (
        <div className="">
        <SectionTitle heading="My Profile" subHeading="Update your profile"></SectionTitle>
        <div>
            <div className="">
                <img className="rounded-full mx-auto w-44" src="https://i.ibb.co/nCP8gfY/delivery-boy.jpg" alt="" />
            </div>
          
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-evenly gap-20">
                    {/* User email */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">User email</span>
                    </label>
                    <input
                        type="email"
                        defaultValue={user?.email}
                        readOnly
                        placeholder="User email"
                        className="input input-bordered border-1 border-purple-700 w-full"
                    />
                </div>

                {/* User name */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">User name</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={user?.displayName}
                        readOnly
                        placeholder="User name"
                        {...register("name", { required: true })}
                        className="input input-bordered border-1 border-purple-700 w-full"
                    />
                </div>
                </div>

               <div className="flex justify-evenly gap-20">
                 {/* Phone number */}
                 <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Phone number</span>
                    </label>
                    <input
                        type="number"
                        defaultValue={user?.phoneNumber}
                        placeholder="Phone Number"
                        {...register("phone", { required: true })}
                        className="input input-bordered border-1 border-purple-700 w-full"
                    />
                </div>

                {/* Profile Picture */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Profile Picture</span>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register("profilePicture")}
                        className="input  w-full"
                    />
                </div>
               </div>

                <div className="text-center">
                    <button className="btn bg-[#BEADFA] mx-auto text-white btn-outline border-purple-800 border-0 border-b-4 mt-4">
                        Update Profile
                    </button>
                </div>
            </form>
                </div>
                <div>
                </div>
            

        </div>
    </div>
    );
};

export default MyProfile;