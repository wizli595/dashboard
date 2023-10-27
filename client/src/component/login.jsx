import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/useUser";

const Login = () => {
    const { setUser } = useUser()
    const navigate = useNavigate()
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    const [status, setStatus] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target
        setInfo(prv => {
            return {
                ...prv,
                [name]: value
            }
        })
    }
    const handleSunmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/login", info)
            .then(rs => {
                setStatus(rs.data)
                if (rs.data.success) {
                    setUser(rs.data.user._id)
                    navigate("/")
                }

            })
            .catch(err => setStatus(err.error))
    }

    return (<div className="h-full flex justify-center items-center flex-col bg-slate-200">
        <div className=" font-bold text-2xl m-3 underline">LOG IN</div>
        <form onSubmit={handleSunmit} className="p-5 border rounded-lg  bg-white " >
            {<div className=" text-red-600 text-center font-bold m-2">{status?.error}</div>}
            <div className="p-2 flex justify-between ">
                <label htmlFor="email" className="block capitalize text-center "  >email :</label>
                <input
                    type="text"
                    name="email"
                    value={info.email}
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
                    value={info.password}
                    onChange={handleChange}
                    className="border block ml-1 indent-2"
                    required
                />
            </div>
            <div className="p-2 text-center">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> log in</button>
            </div>
        </form>
        <div className=" mt-2">
            <span className=" text-sm">you dont have an account </span>
            <span className=" text-md font-black underline text-green-500">
                <Link to={"/sign"} >
                    sign up
                </Link>
            </span>

        </div>
    </div>);
}

export default Login;