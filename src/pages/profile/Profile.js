import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
    const userId = JSON.parse(localStorage.getItem('userId'));
    const [user, setUser] = useState({});
    
    useEffect(()=>{
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/users/${userId}`);
                console.log("yes");
                console.log(response.data);
                
                setUser(response.data);
            } 
            catch (error) {
                alert('Could not fetch user data. Please try again later.');
            }
        }
        // if (userId) {
        //     fetchUserData();
        // } else {
        //     alert('User ID is missing.');
        // }
        fetchUserData();
    },[userId])

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