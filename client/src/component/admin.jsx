import { Link } from "react-router-dom";

const Admin = () => {
    return (<>
        ADMIN
        <hr />
        <Link to={"/admin/display"} >all</Link>
    </>);
}

export default Admin;