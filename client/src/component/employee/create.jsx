import { useEffect, useState } from "react";
import usePost from "../../hooks/usePost";
import { Link, useNavigate } from "react-router-dom";
import handleChange from "../../helprs/handleChange";

const Create = () => {
    const [info, setInfo] = useState({
        username: "",
        email: "",
        password:"123",
        age: "",
    })
    const navigate = useNavigate()
    const { status, handlePost } = usePost()

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePost(info)
    }
    useEffect(() => {
        if (status === "Created") navigate("/admin/display")
    })
    return <>
        <div className="container h-screen flex justify-center items-center m-auto">
            <div className="max-w-7xl w-80  mt-8 p-5 border rounded-xl">
                <div className="mb-4 mx-5 p-2">
                    <h1
                        className=" text-3xl font-bold  decoration-gray-400 text-center">
                        Create
                    </h1>
                </div>
                {status.keyValue && <div className="text-center text-red-700">user already exist</div>}
                <form onSubmit={handleSubmit} >
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="username"
                            className="block py-2.5 px-0
                     w-full text-sm  dark:text-gray-400  
                     bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                     dark:border-gray-600 
                     dark:focus:border-blue-500 focus:outline-none focus:ring-0 
                     focus:border-blue-600 peer"
                            placeholder=" "
                            value={info.username}
                            onChange={(e) => handleChange(e, setInfo)}
                            required />
                        <label
                            htmlFor="name"
                            className="
                    peer-focus:font-medium absolute text-sm 
                     duration-300 transform -translate-y-6 scale-75 top-3
                      -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 
                      peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="email"
                            className="block py-2.5 
                    px-0 w-full text-sm text-gray-900 bg-transparent
                    dark:text-gray-400 
                     border-0 border-b-2 border-gray-300 
                     appearance-none dark:border-gray-600 
                     dark:focus:border-blue-500 focus:outline-none
                      focus:ring-0 focus:border-blue-600 peer"
                            value={info.email}
                            onChange={(e) => handleChange(e, setInfo)}
                            placeholder=" "
                            required />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email address
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="number"
                            name="age"
                            className="block py-2.5 px-0 w-full 
                    text-sm text-gray-900 bg-transparent 
                    border-0 border-b-2 border-gray-300 appearance-none  
                    dark:border-gray-600 dark:focus:border-blue-500 
                    focus:outline-none focus:ring-0
                     focus:border-blue-600 peer"
                            value={info.age}
                            onChange={(e) => handleChange(e, setInfo)}
                            placeholder=" "
                            required />
                        <label
                            htmlFor="age"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            age
                        </label>
                    </div>
                    <div className="p-4 flex justify-end ">
                        <Link to={"/admin/display"}>
                            <button
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">
                                cancel

                            </button>
                        </Link>
                        <button
                            className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            add user
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </>


        ;
}

export default Create;