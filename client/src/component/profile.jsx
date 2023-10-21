import { useUser } from "../context/useUser";

const Profile = () => {
    const { user } = useUser()
    console.log(user)
    return (<>
        {/* {user && <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.createdAt.split("T")[0]}</p>

        </div>} */}

    </>);
}

export default Profile;