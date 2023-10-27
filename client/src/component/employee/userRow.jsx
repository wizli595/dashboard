import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserRow = ({ usr, id, show, hide }) => {
    return (<>
        <tr >
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                    {id}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">
                    {usr.username}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{usr.email}</p>
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <span>{usr.age || '00'}</span>
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <span>{usr.createdAt.split('T')[0]}</span>
            </td>
            <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                <p className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                    onClick={() => show({ display: true, data: usr })}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </p>

            </td>
            <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                <p className="text-gray-600 hover:text-gray-900 cursor-pointer"
                    onClick={() => { hide(pr => [...pr, usr._id]) }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </p>

            </td>
            <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                <Link to={"/admin/delete/" + usr._id}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 hover:text-red-800"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg></p>
                </Link>
            </td>
        </tr>
    </>);
}
UserRow.propTypes = {
    usr: PropTypes.object,
    id: PropTypes.number,
    show: PropTypes.func,
    hide: PropTypes.func,
}

export default UserRow;