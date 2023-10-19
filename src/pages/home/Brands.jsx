const Brands = ({ items }) => {

    const { brand_name, image } = items;
    return (
        <div className="card glass">
             <div className="card-body text-center items-center justify-center">
                <h2 className=" text-center font-bold text-2xl text-red-500">{brand_name}</h2>
            </div>
            <figure><img className="w-full h-56 rounded-lg" src={image} alt="car!" /></figure>
           
        </div>
    );
};

export default Brands;