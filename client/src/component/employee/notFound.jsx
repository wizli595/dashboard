import { Link } from "react-router-dom";
import picErr from '../assets/err.png';
const NotFound = () => {
    return (
        <div className=" text-2xl text-center
         flex justify-center flex-col mt-10">
            <img src={picErr} alt="hhh" className="w-10 m-auto" />
            <h1>Oops! You seem to be lost.</h1>
            <p className="text-red-700">Here are some helpful links:</p>
            <Link to='/api-crud/'>{">>>>>Home<<<<<<"}</Link>
        </div>
    )
}
export default NotFound;