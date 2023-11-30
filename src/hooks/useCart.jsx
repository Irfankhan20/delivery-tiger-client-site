import { useQuery } from '@tanstack/react-query'

import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';

const useCart = () => {

    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://delivery-tiger-server.vercel.app/bookings?email=${user?.email}`,{
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            return res.json();
        },
    })


    return { refetch, cart }

}
export default useCart;