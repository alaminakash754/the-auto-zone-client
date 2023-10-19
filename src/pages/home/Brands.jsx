const Brands = ({ items }) => {

    const { select,brand,name,image,price,description,rating } = items;
    return (
        <div className="card glass">
             <div className="card-body text-center items-center justify-center">
                <h2 className=" text-center font-bold text-2xl text-red-500 uppercase">{brand}</h2>
            </div>
            <figure><img className="w-full h-56 rounded-lg" src={image} alt="car!" /></figure>
           
        </div>
    );
};

export default Brands;