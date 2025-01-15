import React from 'react';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <h2>Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
        </div>
    );
};

export default Profile;