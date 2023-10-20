import { useLoaderData } from "react-router-dom";
import Banner from "../../shared/Banner";
import Brands from "./Brands";
import Dealers from "./Dealers";
import Footer from "./Footer";
import { AiOutlineCar } from 'react-icons/ai';
import { FaPeopleArrows } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';



const Home = () => {
    const brandItems = useLoaderData();

    console.log(brandItems);
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <div className="mb-14">
                <div className="text-center items-center justify-center">
                    <h2 className="text-4xl mb-4 font-bold">Let's Check Latest  <br /> Branded <span className="text-red-500">Cars & Bikes</span></h2>
                    <progress className="progress w-56 text-red-500 bg-red-500"></progress>
                </div>

                <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 rounded-md mt-10">
                    {
                        brandItems.map(items => <Brands key={items._id} items={items}></Brands>)
                    }
                </div>

            </div>
            <Dealers></Dealers>
            <div>
                <div className="flex justify-center items-center gap-5 ">
                    <AiOutlineCar className="text-red-500"></AiOutlineCar>
                    <h4 className="text-red-500 text-center font-medium text-lg">OUR BLOG</h4>
                </div>
                <h1 className="text-4xl font-semibold text-center">Latest News & <span className="text-red-500 ">Blog</span></h1>
                <div className=' text-center'>
                    <progress className="progress w-56 text-red-500 bg-red-500 mt-8 mb-5"></progress>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div className='bg-base-200 rounded-lg'>
                        <img className='rounded-lg p-4 w-80 mx-auto ' src="https://i.ibb.co/K9s3vh5/blog1.jpg" alt="" />
                        <div className='flex gap-4 items-center ml-9'>
                            <div className='flex gap-2 items-center '>
                                <FaPeopleArrows className="text-red-500"></FaPeopleArrows>
                                <p>By Alicia Davis</p>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <SlCalender className="text-red-500"></SlCalender>
                                <p>January 29, 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-base-200 rounded-lg'>
                        <img className='rounded-lg p-4 w-80 mx-auto ' src="https://i.ibb.co/5Y1gqZP/blog-3.jpg" alt="" />
                        <div className='flex gap-4 items-center ml-9'>
                            <div className='flex gap-2 items-center '>
                                <FaPeopleArrows className="text-red-500"></FaPeopleArrows>
                                <p>By Alicia Davis</p>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <SlCalender className="text-red-500"></SlCalender>
                                <p>January 29, 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-base-200 rounded-lg'>
                        <img className='rounded-lg p-4 w-80 mx-auto ' src="https://i.ibb.co/NpKyPJg/blog2.jpg" alt="" />
                        <div className='flex gap-4 items-center ml-9 '>
                            <div className='flex gap-2 items-center '>
                                <FaPeopleArrows className="text-red-500"></FaPeopleArrows>
                                <p>By Alicia Davis</p>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <SlCalender className="text-red-500"></SlCalender>
                                <p>January 29, 2023</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;