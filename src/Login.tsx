import React from "react";
import LoginUI from "./LoginUI";

function Login() {
    const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("User form submitted!");
    };

    const handleAdminSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Admin form submitted!");
    };

    return (
        <LoginUI
            onUserSubmit={handleUserSubmit}
            onAdminSubmit={handleAdminSubmit}
        />
    );
}

export default Login;
