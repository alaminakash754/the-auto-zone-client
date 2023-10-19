import { AiOutlineCar } from 'react-icons/ai';
const Dealers = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-5'>
                <AiOutlineCar className='text-red-500'></AiOutlineCar>
                <h4 className="text-red-500 text-center font-medium text-lg">CAR DEALERS</h4>
            </div>
            <h1 className="text-4xl font-semibold text-center">Best Dealers In <span className="text-red-500 ">Your City</span></h1>
            <div className=' text-center'>
                <progress className="progress w-56 text-red-500 bg-red-500 mt-8"></progress>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Dealers;