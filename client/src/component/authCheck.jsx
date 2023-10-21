import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/check-auth")
            .then(rs => {
                console.log(rs.data);
                if (rs.data.isAuthenticated) {  // Assuming the server sends a boolean isAuthenticated in the response
                    navigate("/profile");  // Navigate to the profile on successful authentication check
                } else {
                    navigate("/login");  // Navigate to the root if not authenticated
                }
            })
            .catch(err => {
                console.log(err);
                navigate("/login");  // Navigate to the root on error
            });
    }, [navigate]);  // Adding navigate to the dependency array of useEffect

    return null;
}

export default Authenticate;