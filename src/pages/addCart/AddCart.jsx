
import Swal from "sweetalert2";
const AddCart = () => {

    const handleAddItem = e => {
        e.preventDefault();
        const form = e.target;
        const select = form.select.value;
        const brand = form.brand.value;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newItem = {select,brand,name,image,price,description,rating};
        console.log(newItem);

        fetch(' http://localhost:5000/motos', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            e.target.reset();
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }
    return (
        <div className="bg-orange-100">
            <h1 className="text-3xl text-center text-red-500 font-medium mb-3 underline">Added Brand Collection</h1>
            <form onSubmit={handleAddItem}>
                {/* from type and brand row */}
                <div className="w-3/4 mx-auto space-y-3">
                    <select name="select" className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Choose One</option>
                        <option>Bike</option>
                        <option>Car</option>
                    </select>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Brand</span>
                            <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Image</span>
                            <input type="text" placeholder="Image URL" name="image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Description</span>
                            <input type="text" placeholder="description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Rating</span>
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className=" text-center ">
                        <button className="btn btn-wide  ">Add Item</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddCart;