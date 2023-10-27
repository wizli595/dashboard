import axios from "axios";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Search = ({ handler }) => {
    const [term, setTerm] = useState("")
    const [searchBy, setSearchBy] = useState("username")
    const [rror, setrror] = useState("")
    const handleClik = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:3000/employee/search?${searchBy}=${term}`)
            .then(res => {
                handler(res.data)
            })
            .catch(err => {
                setrror(err.response.data.message)
            })
    }
    return (<>
        <form onSubmit={(e) => {
            handleClik(e)
        }}>
            <select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="border rounded-xl p-1 mr-2"
            >
                <option value="username">Name</option>
                <option value="age">Age</option>
                <option value="email">Email</option>
            </select>
            <input type="text" name="term" value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="search"
                className="border rounded-xl indent-3 p-1"
            />
            {rror && <p className="text-red-700">{rror}</p>}
        </form>
    </>);
}

export default Search;