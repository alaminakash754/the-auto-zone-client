import { AiOutlineCar } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { BsTelephone } from 'react-icons/bs';
const Dealers = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center gap-5'>
                <AiOutlineCar className='text-red-500'></AiOutlineCar>
                <h4 className="text-red-500 text-center font-medium text-lg">CAR & Bike DEALERS</h4>
            </div>
            <h1 className="text-4xl font-semibold text-center">Best Dealers In <span className="text-red-500 ">Your City</span></h1>
            <div className=' text-center'>
                <progress className="progress w-56 text-red-500 bg-red-500 mt-8 mb-5"></progress>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div className='bg-base-200 rounded-lg'>
                    <img className='rounded-lg p-4 w-80 mx-auto ' src="https://i.ibb.co/bzvS6QK/bmw.jpg" alt="" />
                    <h2 className='text-lg font-medium ml-5'>Automotive Gear</h2>
                    <div className='flex gap-3 items-center ml-5'>
                        <GrLocation className='text-red-500'></GrLocation>
                        <p>25/B Milford Road, New York</p>
                    </div>
                    <div className='flex gap-3 items-center ml-5 mb-2'>
                        <BsTelephone className='text-red-500'></BsTelephone>
                        <p>+2 123 654723</p>
                    </div>
                </div>
                <div className='bg-base-200 rounded-lg'>
                    <img className='rounded-lg p-4 w-80 mx-auto h-64' src="https://i.ibb.co/sqPH931/ford.jpg" alt="" />
                    <h2 className='text-lg font-medium ml-5'>Keithson Car</h2>
                    <div className='flex gap-3 items-center ml-5'>
                        <GrLocation className='text-red-500'></GrLocation>
                        <p>25/B Milford Road, New York</p>
                    </div>
                    <div className='flex gap-3 items-center ml-5 mb-2'>
                        <BsTelephone className='text-red-500'></BsTelephone>
                        <p>+2 123 654723</p>
                    </div>
                </div>
                <div className='bg-base-200 rounded-lg'>
                    <img className='rounded-lg p-4 w-80 mx-auto h-64' src="https://i.ibb.co/h2DzyHH/royal.jpg" alt="" />
                    <h2 className='text-lg font-medium ml-5'>Superious Automotive</h2>
                    <div className='flex gap-3 items-center ml-5'>
                        <GrLocation className='text-red-500'></GrLocation>
                        <p>25/B Milford Road, New York</p>
                    </div>
                    <div className='flex gap-3 items-center ml-5 mb-2'>
                        <BsTelephone className='text-red-500'></BsTelephone>
                        <p>+2 123 654723</p>
                    </div>
                </div>
                <div className='bg-base-200 rounded-lg'>
                    <img className='rounded-lg p-4 w-80 mx-auto h-64' src="https://i.ibb.co/5kkvWxH/suzuki.gif" alt="" />
                    <h2 className='text-lg font-medium ml-5'>Racing Gear</h2>
                    <div className='flex gap-3 items-center ml-5'>
                        <GrLocation className='text-red-500'></GrLocation>
                        <p>25/B Milford Road, New York</p>
                    </div>
                    <div className='flex gap-3 items-center ml-5 mb-2'>
                        <BsTelephone className='text-red-500'></BsTelephone>
                        <p>+2 123 654723</p>
                    </div>
                </div>
                <div className='bg-base-200 rounded-lg'>
                    <img className='rounded-lg p-4 w-80 mx-auto h-64' src="https://i.ibb.co/5RzTwzy/honda.jpg" alt="" />
                    <h2 className='text-lg font-medium ml-5'>Fastspeedio Automotive </h2>
                    <div className='flex gap-3 items-center ml-5'>
                        <GrLocation className='text-red-500'></GrLocation>
                        <p>25/B Milford Road, New York</p>
                    </div>
                    <div className='flex gap-3 items-center ml-5 mb-2'>
                        <BsTelephone className='text-red-500'></BsTelephone>
                        <p>+2 123 654723</p>
                    </div>
                </div>
                <div className='bg-base-200 rounded-lg'>
                    <img className='rounded-lg p-4 w-80 mx-auto h-64' src="https://i.ibb.co/cDVgvDM/yamha.jpg" alt="" />
                    <h2 className='text-lg font-medium ml-5'>Star Auto Gear</h2>
                    <div className='flex gap-3 items-center ml-5'>
                        <GrLocation className='text-red-500'></GrLocation>
                        <p>25/B Milford Road, New York</p>
                    </div>
                    <div className='flex gap-3 items-center ml-5 mb-2'>
                        <BsTelephone className='text-red-500'></BsTelephone>
                        <p>+2 123 654723</p>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default Dealers;