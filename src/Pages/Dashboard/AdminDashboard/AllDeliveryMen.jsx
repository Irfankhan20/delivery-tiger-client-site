import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";


const AllDeliveryMen = () => {
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
                            <th>Delivery Men Name</th>
                            <th>Delivery Men Phone</th>
                            <th>Number Of Parcel Delivered</th>
                            <th>Average Review</th>
                            
                        </tr>
                    </thead>
                    {/* <tbody>
                        {groupedUsers.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>
                                    
                                </td>
                                <td>
                                    
                                </td>
                              </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>
        </div>
    );
};

export default AllDeliveryMen;