import axios from "axios";
import { useUser } from "../context/useUser";
import { useEffect, useState } from "react";

const Profile = () => {
    const { user } = useUser()
    const [info, setInfo] = useState("")
    useEffect(() => {
        axios.get("http://localhost:3000/user/" + user).then(res => {
            setInfo(res.data)
        }).catch(err => console.log(err))
    }, [user])

    return (<>
        {info && <div>
            <p>{info.username}</p>
            <p>{info.email}</p>
            <p>{info.createdAt.split("T")[0]}</p>
        </div>}

    </>);
}

export default Profile;