import { useLoaderData } from "react-router-dom";
import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { useContext, useState } from 'react';
import { AutoZoneContext } from "../../providers/UserProvider";
import Swal from "sweetalert2";
import axios from "axios";

const EachBrandDetails = () => {
    const eachBrandDetails = useLoaderData();
    const { _id, name, image, full_details } = eachBrandDetails;

    const [loading, setLoading] = useState(false);
    const {user} = useContext(AutoZoneContext);
    const addToCart = () => {
        if(user){
            const cartBrand = {
                name,
                image, 
                full_details,
                email: user?.email
            }
            axios.post('http://localhost:5000/cart', cartBrand)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to your cart `,
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
        }
        
        
    }
    const handleClick = () => {
       
        setLoading(true);

        // Simulating an asynchronous operation (API call, etc.)
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };
    return (
        <div className="mb-5">
            <div className="space-y-5">
                <h2 className="text-center text-3xl font-semibold text-red-500">{name}</h2>
                <img src={image} alt="" />
                <p><span className="text-lg font-medium text-red-500">Details: </span> {full_details}</p>
                <div className="text-center mb-5">
                    <AwesomeButtonProgress
                    onPressed={() => addToCart(_id)}
                        type="button"
                        size="large"
                        loading={loading}
                        action={(element) => handleClick(element)}
                    >
                       {loading ? 'Loading...' : 'Add To Cart'}
                    </AwesomeButtonProgress>
                </div>


            </div>
        </div>
    );
};

export default EachBrandDetails;