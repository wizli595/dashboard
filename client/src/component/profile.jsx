import axios from "axios";
import { useUser } from "../context/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    const [info, setInfo] = useState("")
    useEffect(() => {
        if (user === "65390c2921c7dbb88cf87d64") return navigate("/admin")
        axios.get("http://localhost:3000/user/" + user).then(res => {
            setInfo(res.data)
        }).catch(err => console.log(err))
    }, [user, navigate])

    return (<>
        {info && <div>
            <p>{info.username}</p>
            <p>{info.email}</p>
            <p>{info.createdAt.split("T")[0]}</p>
        </div>}

    </>);
}

export default Profile;