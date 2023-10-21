import { useState } from "react";
import axios from 'axios';
// import Profile from "./profile";
import { useNavigate } from "react-router-dom";
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
                    navigate("/profile")
                }

            })
            .catch(err => setStatus(err.error))
    }

    return (<>
        {<p>{status?.error}</p>}
        <form onSubmit={handleSunmit}>
            <div>
                email:
                <input
                    type="text"
                    name="email"
                    value={info.email}
                    onChange={handleChange} />
            </div>
            <div>
                password:
                <input
                    type="text"
                    name="password"
                    value={info.password}
                    onChange={handleChange} />
            </div>
            <button>log in</button>
        </form>


    </>);
}

export default Login;