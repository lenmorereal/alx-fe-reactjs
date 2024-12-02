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
            <p>{props.bio}</p>
        </div>
    );
};

export default UserProfile;
