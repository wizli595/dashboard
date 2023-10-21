import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prv => {
            return {
                ...prv,
                [name]: value
            }
        })
    }
    return (<><div className="h-full flex justify-center items-center flex-col bg-slate-200">
        <div className=" font-bold text-2xl m-3 underline uppercase">register</div>
        <form className="p-5 border rounded-lg  bg-white " >
            {/* {<div className=" text-red-600 text-center font-bold m-2">{status?.error}</div>} */}
            <div className="p-2 flex justify-between ">
                <label htmlFor="username" className="block capitalize text-center "  >username :</label>
                <input
                    type="text"
                    name="username"
                    value={data.email}
                    onChange={handleChange}
                    className="border block indent-2 ml-1 "
                    required
                />
            </div>
            <div className="p-2 flex justify-between ">
                <label htmlFor="email" className="block capitalize "  >email :</label>
                <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="border block indent-2"
                    required
                />
            </div>
            <div className="p-2 flex justify-between">
                <label htmlFor="password" className=" block capitalize">password :</label>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="border block ml-1 indent-2"
                    required
                />
            </div>
            <div className="p-2 text-center">
                <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    sign Up
                </button>
            </div>
        </form>
        <div className=" mt-2">
            <span className=" text-sm">I already have an account </span>
            <span className=" text-md font-black underline text-green-500">
                <Link to={"/login"} >
                    log in
                </Link>
            </span>


        </div>


    </div></>);
}

export default SignUp;