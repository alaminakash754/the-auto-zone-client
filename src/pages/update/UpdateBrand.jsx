import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBrand = () => {

    const updateBrand = useLoaderData();
    const navigate = useNavigate();

    const { _id, select, brand, name, image, price,  rating } = updateBrand;

    const handleUpdateBrand = e => {
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const updatedItem = {select,brand,name,image,price,rating};
        console.log(updatedItem);

        fetch(` http://localhost:5000/motos/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your brand updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            navigate('/');
        });
    }


    return (
        <div className="bg-orange-100">
            <h1 className="text-3xl text-center text-red-500 font-medium mb-3 underline">Update Your Brand</h1>
            <form onSubmit={handleUpdateBrand}>
                {/* from type and brand row */}
                <div className="w-3/4 mx-auto space-y-3">
                <select name="select" defaultValue={select} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Choose One</option>
                        <option>Bike</option>
                        <option>Car</option>
                    </select>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Brand</span>
                            <input type="text" placeholder="Brand Name" defaultValue={brand} name="brand" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Image</span>
                            <input type="text" placeholder="Image URL" defaultValue={image} name="image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" placeholder="Price" defaultValue={price} name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Rating</span>
                            <input type="text" placeholder="Rating" defaultValue={rating} name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className=" text-center ">
                        <button className="btn btn-wide  ">Update Brand</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UpdateBrand;