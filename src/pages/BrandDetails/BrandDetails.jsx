import { useLoaderData } from "react-router-dom";



const BrandDetails = () => {
    const detailsBrand = useLoaderData();
    const { _id, select, brand, name, image, price, description, rating } = detailsBrand;
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/Nn42T4x/white-coupe-sport-car-standing-road-front-view.jpg" className="w-full h-[600px] rounded-lg" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/Jd8STrW/still-life-cafe-racer-style-motorbike.jpg" className="w-full h-[600px] rounded-lg" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/yBRdzS2/Honda-Civic-Type-R-1-1.jpg
" className="w-full h-[600px] rounded-lg" />

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
                    <button className="rounded-lg p-4 text-white hover:text-red-500 hover:bg-gray-400 bg-red-500 ">Details</button>
                    <button className="rounded-lg p-4 hover:text-red-500 text-white hover:bg-gray-400 bg-red-500">Update</button>
                </div>
            </div>
            <div>
                <div className="card glass">
                    <div className="card-body text-center items-center justify-center">
                        <h2 className=" text-center font-bold text-2xl text-red-500 uppercase">{brand}</h2>
                    </div>
                    <figure><img className="w-full h-56 rounded-lg" src={image} alt="car!" /></figure>

                </div>
            </div>

        </div>
    );
};

export default BrandDetails;