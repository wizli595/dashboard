import { Outlet } from "react-router-dom";
import AuthWrapper from "./authWrapper";

const ProtectedRoute = () => {
    return (<AuthWrapper>
        <Outlet />
    </AuthWrapper>);
}

export default ProtectedRoute;