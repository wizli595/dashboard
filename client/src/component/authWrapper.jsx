import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/check-auth")
            .then(rs => {
                if (rs.data.isAuthenticated) {
                    navigate("/profile"); // Redirect to profile if already logged in
                } else {
                    navigate("/login")
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [navigate]);

    return children;
}

export default AuthWrapper;