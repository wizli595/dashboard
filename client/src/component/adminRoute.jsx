import { Outlet } from "react-router-dom";
import AuthAdmin from "./authAdmin";

const AdminRoute = () => {
    return (<AuthAdmin>
        <Outlet />
    </AuthAdmin>);
}

export default AdminRoute;