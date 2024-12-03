import React from 'react';

const UserProfile = (props) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
            maxWidth: '300px',
            margin: '16px auto',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
        }}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p> {/* Ensure the word "Bio" is included here */}
        </div>
    );
};

export default UserProfile;
