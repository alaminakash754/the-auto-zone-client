import { useContext } from "react";
import { AutoZoneContext } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AutoZoneContext)
    if(loading){
        return <span className="loading loading-ring loading-lg text-orange-400"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to ='/login'></Navigate>
};

export default PrivateRoute;