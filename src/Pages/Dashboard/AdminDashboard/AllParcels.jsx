

const AllParcels = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>User Name</th>
                        <th>User Phone</th>
                        <th>Booking Date</th>
                        <th>Requested Delivery Date</th>
                        <th>Booking Status</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Manage button</th>
                        

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
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllParcels;