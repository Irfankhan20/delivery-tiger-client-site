import { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";



const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: books = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    console.log(books);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axiosSecure.get('/books');
            return res.data;
        },
        onError: (error) => {
            console.error('Error fetching user data:', error);
        }
    });

    const groupedUsers = users.reduce((acc, user) => {
        const existingUser = acc.find((u) => u.email === user.email);

        if (existingUser) {
            existingUser.numberOfParcelBooking += 1;
            existingUser.totalSpentAmount += user.price;
        } else {
            acc.push({
                email: user.email,
                phone: user.phone,
                name: user.name,
                numberOfParcelBooking: 1,
                totalSpentAmount: user.price,
            });
        }

        return acc;
    }, []);

    const handleMakeAdmin = (params) => {
        if (params._id) {
            axiosSecure.patch(`/books/admin/${params._id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${params.name} is an Admin Now!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => {
                    console.error('Error making admin:', error);
                });
        } else {
            console.error('User ID is undefined:', params);
        }
    }

    return (
        <div className=''>
            <Helmet>
                <title>DeliveryTiger | My Parcels</title>
            </Helmet>
            <div><Toaster /></div>
            <div>
                <h2 className="text-center mb-6 text-3xl font-medium">All Users List</h2>
            </div>
            <div className="overflow-x-auto shadow-2xl rounded-lg" >
                <div className='flex justify-between items-center bg-purple-200 py-6 px-4'>
                    {/* ... (existing code) */}
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>User email</th>
                            <th>User phone</th>
                            <th>Number Of Parcel Booking</th>
                            <th>Total Spent Amount</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groupedUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.numberOfParcelBooking}</td>
                                <td>{user.totalSpentAmount}</td>
                                <th>
                                    {user.role === 'admin' ? 'Admin' : (
                                        <button onClick={() => handleMakeAdmin(user)} className="border-2 border-purple-700 px-2 py-1 rounded-full">
                                            <img src="https://i.ibb.co/0tmL62X/software-engineer.png" alt="" />
                                        </button>
                                    )}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
