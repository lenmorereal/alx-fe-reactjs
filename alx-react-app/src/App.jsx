import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div>
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography." 
            />
            <UserProfile 
                name="Bob" 
                age="30" 
                bio="Enjoys coding and playing chess." 
            />
            <UserProfile 
                name="Charlie" 
                age="28" 
                bio="Passionate about traveling and cooking." 
            />
        </div>
    );
}

export default App;
