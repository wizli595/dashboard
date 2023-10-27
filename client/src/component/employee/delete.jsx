import { Link, useNavigate, useParams } from "react-router-dom";
import useDelete from "../../hooks/useDelete";

const Delete = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { status, handleDelete } = useDelete()
    return (<>
        <div className="h-full w-3/6 m-auto flex justify-center 
            items-center flex-col border rounded-xl mt-5 p-5">
            {status && <p>{status}</p>}
            <h1 className="text-lg font-bold">are you sure about deleting this user</h1>
            <div >
                <Link to={"/admin/display"} >
                    <button className="px-3 py-2
                text-sm font-medium text-center text-white bg-green-700
                 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
                  focus:ring-blue-300 mr-3
                ">
                        go back
                    </button>
                </Link>

                <button className="mt-5 text-white bg-red-700 hover:bg-red-800 
                focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                inline-flex items-center "
                    onClick={() => {
                        handleDelete(id);
                        navigate("/api-crud/")
                    }}>
                    Delete
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white-600 "
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </p>
                </button>

            </div>
        </div>

    </>);
}

export default Delete;