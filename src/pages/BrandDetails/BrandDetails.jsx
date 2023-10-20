import { Link, useLoaderData } from "react-router-dom";



const BrandDetails = () => {
    const detailsBrand = useLoaderData();
    const { _id, select, brand, sub_model1, sub_model2, sub_model3, sub_model4, model1_img, model2_img, model3_img, model4_img, full_details, name, image, price, description, rating } = detailsBrand;
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={image} className="w-full h-[600px] rounded-lg" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={model1_img} className="w-full h-[600px] rounded-lg" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src={model2_img} className="w-full h-[600px] rounded-lg" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <div className="card glass w-1/2 mx-auto mt-5 p-2">
                <div className="card-body text-center items-center justify-center">
                    <h2 className=" text-center font-bold text-2xl text-red-500 uppercase">{brand}</h2>
                </div>
                <figure><img className="w-full h-56 rounded-lg mb-3" src={image} alt="car!" /></figure>
                <h2 className="font-medium text-xl text-red-500"><span className="text-lg font-semibold text-black">Name: </span> {name}</h2>
                <h2 className="font-medium text-xl text-red-500"><span className="text-lg font-semibold text-black">Price: </span> {price}</h2>
                <h2 className="font-normal text-xl text-red-500"><span className="text-lg font-semibold text-black">Description: </span> {description}</h2>
                <h2 className="font-medium text-xl text-red-500"><span className="text-lg font-semibold text-black">Rating: </span> {rating}</h2>
                <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-5  mt-5 justify-evenly">
                    <Link to={`/eachbrand/${_id}`}>
                        <button className="rounded-lg p-4 text-white hover:text-red-500 hover:bg-gray-400 bg-red-500 ">Details</button>
                    </Link>
                    <Link to={`/updatebrand/${_id}`}>
                        <button className="rounded-lg p-4 hover:text-red-500 text-white hover:bg-gray-400 bg-red-500">Update</button>
                    </Link>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-3xl font-bold text-red-500 text-center">Explore Our More Products</h1>
                <div className="text-center">
                    <progress className="progress w-56 text-red-500 bg-red-500 mt-8 mb-5"></progress>
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="bg-red-100  space-y-3">
                        <div className="card-body text-center items-center justify-center">
                            <h2 className=" text-center font-bold text-2xl text-red-500 uppercase">{sub_model1}</h2>
                        </div>
                        <figure><img className="w-10/12 mx-auto h-56 rounded-lg" src={model1_img} alt="car!" /></figure>
                        <p className=" text-center font-bold text-2xl text-red-500 uppercase">Price: {price}</p>

                    </div>
                    <div className="space-y-3 bg-red-100">
                        <div className="card-body text-center space-y-3 items-center justify-center">
                            <h2 className=" text-center font-bold text-2xl text-red-500 uppercase">{sub_model2}</h2>
                        </div>
                        <figure><img className="w-10/12 mx-auto h-56 rounded-lg" src={model2_img} alt="car!" /></figure>
                        <p className=" text-center font-bold text-2xl text-red-500 uppercase">Price: {price}</p>

                    </div>

                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-7">
                    <div className="space-y-3 bg-red-100">
                        <div className="card-body text-center  items-center justify-center">
                            <h2 className=" text-center font-bold text-2xl text-red-500 uppercase">{sub_model3}</h2>
                        </div>
                        <figure><img className="w-10/12 mx-auto h-56 rounded-lg" src={model3_img} alt="car!" /></figure>
                        <p className=" text-center font-bold text-2xl text-red-500 uppercase">Price: {price}</p>


                    </div>
                    <div className="space-y-3 bg-red-100">
                        <div className="card-body text-center space-y-3 items-center justify-center">
                            <h2 className=" text-center font-bold text-2xl text-red-500 uppercase">{sub_model4}</h2>
                        </div>
                        <figure><img className="w-10/12 h-56 mx-auto rounded-lg" src={model4_img} alt="car!" /></figure>
                        <p className=" text-center font-bold text-2xl text-red-500 uppercase">Price: {price}</p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default BrandDetails;