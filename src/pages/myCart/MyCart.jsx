import { useContext, useEffect, useState } from "react";
import { AutoZoneContext } from "../../providers/UserProvider";
import CartRow from "../../Components/CartRow";

const MyCart = () => {
    const { user } = useContext(AutoZoneContext);
    const [carts, setCarts] = useState([]);

    const url = `http://localhost:5000/cart?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCarts(data))
            
    }, [url]);
    return (
        <div>
            <h1 className="text-2xl text-red-500 shadow-lg shadow-yellow-300 text-center mb-8">My Cart Collection</h1>
            <div className="bg-blue-50">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((cart,index) => <CartRow key={index} cart={cart}></CartRow>)
                            }
                            
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;