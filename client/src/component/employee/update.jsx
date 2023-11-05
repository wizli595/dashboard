import PropTypes from 'prop-types';
import { useState } from 'react';
import useUpdate from '../../hooks/useUpdate';
import handleChange from '../../helprs/handleChange';
import svg from '../../assets/cls.svg';

const Update = ({ usr, show }) => {
    const [nInfo, setNinfo] = useState({
        username: "",
        email: "",
        age: 0,
    })
    // eslint-disable-next-line no-unused-vars
    const { status, handleUpdate } = useUpdate()
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(usr._id, nInfo)
        location.reload()

    }
    return (<div className='flex justify-center items-center'>
        <div
            className=" w-80
             absolute bg-slate-500 z-10 opacity-80 flex justify-center 
            items-center flex-col text-white  rounded-xl pb-5 
             ">
            <h1 className="text-3xl mb-3">update the user</h1>
            <form
                className="bg-white p-5 rounded-lg w-10/12 relative"
                onSubmit={handleSubmit}>
                <span className='text-black 
                cursor-pointer  absolute right-0 top-0   m-0'
                    onClick={() => show(pr => {
                        return {
                            ...pr,
                            display: false
                        }
                    })}>
                    <img src={svg} alt="close" />

                </span>

                <div className="text-center">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 ">
                        name
                    </label>
                    <input
                        type="name"
                        name="username"
                        className="bg-gray-50 border
                         border-gray-300 text-gray-900 
                         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-600 
                        dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder={usr.name}
                        value={nInfo.username}
                        onChange={(e) => handleChange(e, setNinfo)}
                        required />
                </div>
                <div className="text-center">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 ">
                        email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="bg-gray-50 border
                         border-gray-300 text-gray-900 
                         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-600 
                        dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder={usr.email}
                        value={nInfo.email}
                        onChange={(e) => handleChange(e, setNinfo)}
                        required />
                </div>
                <div className="text-center">
                    <label
                        htmlFor="age"
                        className="block mb-2 text-sm font-medium text-gray-900 ">
                        age
                    </label>
                    <input
                        type="age"
                        name="age"
                        className="bg-gray-50 border
                         border-gray-300 text-gray-900 
                         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-600 
                        dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder={usr.age}
                        value={nInfo.age}
                        onChange={(e) => handleChange(e, setNinfo)}
                        required />
                </div>
                <div>
                    <button className="w-full text-white bg-blue-700
                     hover:bg-blue-800 focus:ring-4 focus:outline-none
                      focus:ring-blue-300 font-medium rounded-lg text-sm 
                      px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                       dark:focus:ring-blue-800 mt-6">
                        Update
                    </button>
                </div>
            </form>


        </div>

    </div>);
}
Update.propTypes = {
    usr: PropTypes.object,
    show: PropTypes.func
}
export default Update;