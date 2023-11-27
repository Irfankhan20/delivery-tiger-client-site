import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProviders";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const BookAParcel = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(0);

    // useEffect to calculate the price when the weight changes
    useEffect(() => {
        const calculatePrice = () => {
            const numberWeight = parseInt(weight);
            if (!isNaN(numberWeight)) {
                let calculatedPrice = 0;
                if (numberWeight === 1) {
                    calculatedPrice = 50;
                } else if (numberWeight === 2) {
                    calculatedPrice = 100;
                } else if (numberWeight > 2) {
                    calculatedPrice = 150;
                }
                setPrice(calculatedPrice);
            }
        };
        calculatePrice();
    }, [weight]);

    const onSubmit = async (data) => {
        const today = new Date().toISOString().split('T')[0];
        const bookItem = {
            address: data.address,
            date: data.date,
            bookingDate: today,
            email: data.email,
            latitude: data.latitude,
            longitude: data.longitude,
            name: data.name,
            phone: data.phone,
            price: price, 
            receivername: data.receivername,
            receiverphone: data.receiverphone,
            type: data.type,
            weight: isNaN(parseInt(data.weight)) ? 0 : parseInt(data.weight),
            status: 'pending'
        };

        axiosPublic.post('/bookings', bookItem).then((res) => {
            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Parcel is Booked",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <div className="">
            <SectionTitle heading="book a parcel" subHeading='What is new?'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* user email  */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">
                                User email
                            </span>
                        </label>
                        <input type="email" defaultValue={user?.email} readOnly placeholder="User email" {...register("email", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                    </div>

                    {/* user name */}
                    <div className="flex w-full gap-4 my-6">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">
                                    User name
                                </span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} readOnly placeholder="User name" {...register("name", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>
                        {/* phone number */}
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Phone number
                                </span>
                            </label>
                            <input type="number" placeholder="Phone Number" {...register("phone", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>
                    </div>
                    {/* parcel type  */}
                    <div className="flex w-full gap-4 my-6">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Parcel type
                                </span>
                            </label>
                            <input type="text" placeholder="Parcel Type" {...register("type", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>
                        {/* parcel weight */}
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Parcel Weight
                                </span>
                            </label>
                            <input type="number" placeholder="Parcel Weight" {...register("weight", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" onChange={(e) => setWeight(parseInt(e.target.value))} />
                        </div>
                    </div>
                    {/* receivers name  */}
                    <div className="flex w-full gap-4 my-6">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Receiver name
                                </span>
                            </label>
                            <input type="text" placeholder="Receiver Name" {...register("receivername", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>
                        {/* receiver phone */}
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Receiver Phone Number
                                </span>
                            </label>
                            <input type="number" placeholder="Receiver Phone Number" {...register("receiverphone", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>
                    </div>
                    {/* delivery address  */}
                    <div className="flex w-full gap-4 my-6">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Delivery Address
                                </span>
                            </label>
                            <input type="text" placeholder="Delivery Address" {...register("address", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>
                        {/* delivery date */}
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Requested Delivery Date
                                </span>
                            </label>
                            <input type="date" placeholder="Requested Delivery Date" {...register("date", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>
                        {/* delivery charge */}
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Delivery Charge
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Delivery Charge"
                                value={price} // Use the calculated price directly
                                readOnly
                                className="input input-bordered border-1 border-purple-700 w-full"
                            />
                        </div>
                    </div>
                    {/* Delivery Address Latitude  */}
                    <div className="flex w-full gap-4 my-6">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Delivery Address Latitude
                                </span>
                            </label>
                            <input type="text" placeholder="Delivery Address Latitude" {...register("latitude", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>
                        {/* Delivery Address Longitude */}
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text">
                                    Delivery Address Longitude
                                </span>
                            </label>
                            <input type="text" placeholder="Delivery Address Longitude" {...register("longitude", { required: true })} className="input input-bordered border-1 border-purple-700 w-full" />
                        </div>

                    </div>

                    <div className="text-center">
                        <button className="btn bg-[#BEADFA] mx-auto  text-white btn-outline border-purple-800 border-0 border-b-4 mt-4">Book Now</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default BookAParcel;