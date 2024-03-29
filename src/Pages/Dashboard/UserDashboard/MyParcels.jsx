import { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useBook from "../../../hooks/useBook";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const MyParcels = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, cart } = useCart();
    // const [books, refetch] = useBook();
    // console.log(books);
    // console.log(cart);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    const calculateApproximateDeliveryDate = (bookingDate) => {
        const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000; // Three days in milliseconds
        const bookingDateObject = new Date(bookingDate);
        const approximateDeliveryDateObject = new Date(bookingDateObject.getTime() + threeDaysInMilliseconds);
        const formattedDate = approximateDeliveryDateObject.toISOString().split('T')[0];
        return formattedDate;
    };


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/books/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className=''>
            <Helmet>
                <title>DeliveryTiger | My Parcels</title>
            </Helmet>
            <div><Toaster /></div>
            <div className="overflow-x-auto shadow-2xl rounded-lg" >
                <div className='flex justify-between items-center bg-purple-200 py-6 px-4'>
                    <div>
                        My Bookings : {cart.length}
                    </div>
                    <div>
                        Total Payble: ${totalPrice}
                    </div>

                </div>

                <table className="table">
                    {/* head */}
                    <thead>

                        <tr>
                            <th>Serial</th>
                            <th>Parcel Type</th>
                            <th>Requested Delivery Date</th>
                            <th>Approximate Delivery Date</th>
                            <th>Booking Date</th>
                            <th>Delivery Men ID</th>
                            <th>Booking Status</th>
                            <th>Update</th>
                            <th>Cancel</th>
                            <th>Review</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((book, index) =>
                                <tr key={book._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {book.type}
                                    </td>
                                    <td>
                                        {book.date}
                                        <br />
                                    </td>
                                    <td>
                                        {calculateApproximateDeliveryDate(book.bookingDate)}
                                        <br />
                                    </td>
                                    <td>
                                        {book.bookingDate}
                                        <br />
                                    </td>
                                    <td>
                                        {/* delivery men id  */}
                                        <br />
                                    </td>
                                    <td>
                                        {book.status}
                                        <br />
                                    </td>
                                    <th>
                                        <button className=" bg-yellow-600 text-white px-2 py-1 rounded-full">Review</button>
                                    </th>
                                    <th>
                                        <Link to={`/dashboard/updateItem/${book._id}`}>
                                            <button disabled={book.status !== 'pending'} className=" bg-purple-600 text-white px-2 py-1 rounded-full">Update</button></Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(book._id)} className=" bg-red-600 text-white px-2 py-1 rounded-full">Delete</button>
                                    </th>
                                    <td>
                                        <Link to={`/dashboard/payment/${book._id}`}><button className='bg-yellow-400 text-white px-2 py-1 rounded-full'> Pay</button></Link>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyParcels;