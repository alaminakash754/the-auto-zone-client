import { useLoaderData } from "react-router-dom";


const EachBrandDetails = () => {
    const eachBrandDetails = useLoaderData();
    const { _id, name, image, full_details } = eachBrandDetails;

    return (
        <div>
            <div className="space-y-5">
                <h2 className="text-center text-3xl font-semibold text-red-500">{name}</h2>
                <img src={image} alt="" />
                <p><span className="text-lg font-medium text-red-500">Details: </span> {full_details}</p>

                <button className="btn btn-block bg-red-500 mb-5 font-bold">Add To Cart</button>

            </div>
        </div>
    );
};

export default EachBrandDetails;