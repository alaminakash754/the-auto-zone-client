

const CartRow = ({cart}) => {
    const {image, name, email} = cart;
    console.log(cart.name);
    // console.log(name);
    return (
        <tr>

            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>
            <td>
                {name}
            </td>
            <td>{email}</td>
            
            
        </tr>
    );
};

export default CartRow;