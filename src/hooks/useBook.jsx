import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useBook = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { refetch, data: books = [] } = useQuery({
    queryKey: ['books', user?.email],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/books?.email=${user.email}`);
        return res.data || [];
      } catch (error) {
        // Handle error, e.g., log it or show a user-friendly message
        console.error("Error fetching books:", error);
        throw error;
      }
    }
  });

  return [books, refetch];
};

export default useBook;
