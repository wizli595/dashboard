import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const SignUp = () => {
    const [status, setStatus] = useState(null)
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
    const handleResgister = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/register", data).then(res => {
            setStatus(res.data)
        }).catch(err => setStatus(err))
    }
    return (<><div className="h-full flex justify-center items-center flex-col bg-slate-200">
        <div className=" font-bold text-2xl m-3 underline uppercase">register</div>
        <form className="p-5 border rounded-lg  bg-white " onSubmit={handleResgister}>
            {<div className={`  text-center font-bold m-2 ${status?.error ? "text-red-600 " : "text-green-600"}`} >{status?.error || status?.success}</div>}
            <div className="p-2 flex justify-between ">
                <label htmlFor="username" className="block capitalize text-center "  >username :</label>
                <input
                    type="text"
                    name="username"
                    value={data.username}
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
        </form >
        <div className=" mt-2">
            <span className=" text-sm">I already have an account </span>
            <span className=" text-md font-black underline text-green-500">
                <Link to={"/login"} >
                    log in
                </Link>
            </span>


        </div>


    </div ></>);
}

export default SignUp;