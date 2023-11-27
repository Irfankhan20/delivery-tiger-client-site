

const MyDeliveryList = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Booked User Name</th>
                        <th>Receivers Name</th>
                        <th>Booked User Phone Number</th>
                        <th>Requested Delivery Date</th>
                        <th>Approximate Delivery Date</th>
                        <th>Receivers Phone Number</th>
                        <th>Receivers Address</th>
                        <th>View Location</th>
                        <th>Cancel</th>
                        <th>Deliver</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td>12/16/2020</td>
                        <td>12/16/2020</td>
                         <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyDeliveryList;