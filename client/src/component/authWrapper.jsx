import axios from "axios";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const AuthWrapper = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    const [isAuthenticated, setIsAuthenticated] = useState(null); // null means not determined

    useEffect(() => {
        if (isAuthenticated === null) {
            axios.get("http://localhost:3000/check-auth")
                .then(rs => {
                    setIsAuthenticated(rs.data.isAuthenticated);
                    if (rs.data.isAuthenticated) {
                        if (location.pathname === "/login" ||
                            location.pathname === "/sign") {
                            navigate("/profile");
                        }
                    } else {
                        // if (location.pathname !== "/login")//
                        navigate("/sign");
                    }
                })
                .catch(err => {
                    console.error(err);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
    }, [navigate, location, isAuthenticated]);
    if (isLoading) return <div>Loading...</div>;
    return children;
}
AuthWrapper.propTypes = {
    children: PropTypes.node
}

export default AuthWrapper;