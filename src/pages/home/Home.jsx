import { useLoaderData } from "react-router-dom";
import Banner from "../../shared/Banner";
import Brands from "./Brands";
import Dealers from "./Dealers";



const Home = () => {
    const brandItems = useLoaderData();
    console.log(brandItems); 
    return (
        <div>
            <Banner></Banner>
            <div className="mb-10">
                <div className="text-center items-center justify-center">
                    <h2 className="text-4xl mb-4 font-bold">Let's Check Latest <span className="text-red-500">Cars & Bikes</span></h2>
                    <progress className="progress w-56 text-red-500 bg-red-500"></progress>
                </div>
                <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 rounded-md mt-10">
                {
                    brandItems.map(items => <Brands key={items.id} items={items}></Brands>)
                }
                </div>
            </div>
            <Dealers></Dealers>
        </div>
    );
};

export default Home;