import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AutoZoneContext } from "../providers/UserProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AutoZoneContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#252424] font-bold text-lg hover:bg-red-500 underline" : ""
            }>Home</NavLink></li>
        <li><NavLink to="/addproduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#252424] font-bold  text-lg hover:bg-red-500  underline" : ""
            }>Add Product</NavLink></li>


        <li><NavLink to="/mycart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#252424] text-lg hover:bg-red-500 font-bold underline" : ""
            }>My Cart</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu gap-1 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-32 h-24" src="https://i.ibb.co/j3FtzBK/icon.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <h3 className="mr-5">{user.displayName
                            }</h3>
                            <img className="w-10 h-10 rounded-full mr-2" src={user.photoURL} />
                            <button onClick={handleSignOut} className="btn btn-sm">Sign out</button>

                        </>
                        :
                        <Link to='/login'><button className="btn bg-red-500">Login</button></Link>
                }


            </div>
        </div>
    );
};

export default NavBar;