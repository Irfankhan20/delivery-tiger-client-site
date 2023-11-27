

const AllUsers = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>User Name</th>
                        <th>Phone Number</th>
                        <th>Total Spent Amount</th>
                        <th>Booking Status</th>
                        <th>Make Delivery Men</th>
                        <th>Make Admin</th>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;