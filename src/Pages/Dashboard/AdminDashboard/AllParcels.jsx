

import { Helmet } from "react-helmet";
import useBook from "../../../hooks/useBook";
import { Toaster } from "react-hot-toast";


const AllParcels = () => {
    const [books] = useBook();
    console.log(books);

    const totalPrice = books.reduce((total, item) => total + item.price, 0).toFixed(2);

    return (
        <div className=''>
        <Helmet>
            <title>DeliveryTiger | My Parcels</title>
        </Helmet>
        <div><Toaster /></div>
        <div>
            <h2 className="text-center mb-6 text-3xl font-medium">All Parcels List</h2>
        </div>
        <div className="overflow-x-auto shadow-2xl rounded-lg" >
            <div className='flex justify-between items-center bg-purple-200 py-6 px-4'>
                <div>
                    All Bookings : {books.length}
                </div>
                <div>
                    Total Payble: ${totalPrice}
                </div>

            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>User Name</th>
                        <th>User Phone</th>
                        <th>Booking Date</th>
                        <th>Requested Delivery Date</th>
                        <th>Amount</th>
                        <th>Booking Status</th>
                        <th>Manage button</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => <tr key={book._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>{book.name}</td>
                            <td>
                                {book.phone}
                            </td>
                            <td>{book.bookingDate}</td>
                            <td>{book.date}</td>
                            <td>{book.price}</td>
                            <td>{book.status}</td>
                            <td>
                                <button className="border-2 border-purple-700 px-2 py-1 rounded-full"><img src="https://i.ibb.co/tJC0H2M/planning.png" alt="" /></button>
                            </td>
                            

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllParcels;