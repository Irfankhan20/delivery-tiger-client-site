import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
       queryKey: ['isAdmin', user?.email],
       queryFn: async () => {
          const res = await axiosSecure.get(`/users/admin/${user?.email}`);
          console.log(res.data);
          return res.data?.admin;
       }
    }); 
 
    const { data: isdeliveryman, isLoading: isdeliverymanLoading } = useQuery({
       queryKey: ['isdelivery', user?.email],
       queryFn: async () => {
          const res = await axiosSecure.get(`/users/deliveryman/${user?.email}`);
          console.log(res.data);
          return res.data?.deliveryman;
          }
       
    });
    
 
    return [isAdmin, isdeliveryman, isAdminLoading, isdeliverymanLoading];
 
};

export default useAdmin;