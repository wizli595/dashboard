import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthWrapper = ({ children }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3000/check-auth")
            .then(rs => {
                if (rs.data.isAuthenticated) {
                    setIsLoading(false)
                    navigate("/profile"); // Redirect to profile if already logged in
                } else {
                    setIsLoading(false)
                    navigate("/login")
                }
            })
            .catch(err => {
                setIsLoading(false)
                console.error(err);
            });
    }, [navigate]);
    if (isLoading) return <div>Loading...</div>;



    return children;
}

export default AuthWrapper;