import { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProviders";


const useDeliveryMen = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data: isdeliveryman, isPending: isdeliverymanLoading} = useQuery({
        queryKey: [user?.email, 'isdeliveryman'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/deliveryman/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }

    })
    return [isdeliveryman, isdeliverymanLoading]
};

export default useDeliveryMen;