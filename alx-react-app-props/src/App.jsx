import React from "react";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";

const App = () => {
    return (
        <UserProvider>
            <div>
                <h1>Welcome to the App</h1>
                <UserProfile />
            </div>
        </UserProvider>
    );
};

export default App;
