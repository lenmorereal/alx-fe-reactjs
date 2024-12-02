import React from 'react';

const UserProfile = (props) => {
    return (
        <div style={{
            border: '1px solid gray',
            padding: '16px',
            margin: '16px auto',
            maxWidth: '300px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            textAlign: 'center'
        }}>
            <h2 style={{ color: 'teal', fontSize: '24px', margin: '10px 0' }}>{props.name}</h2>
            <p style={{ fontSize: '18px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
