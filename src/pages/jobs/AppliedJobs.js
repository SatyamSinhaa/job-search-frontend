import React, {useState, useEffect} from 'react';
import axios from 'axios';
import JobCard from '../../components/jobcard/JobCard';

const AppliedJobs = () => {
    // Retrieve the user object from local storage
    const userId = JSON.parse(localStorage.getItem('userId'));
    const [jobs, setJobs] = useState({});

    useEffect(()=>{
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/users/${userId}`);
                console.log("yes");
                console.log(response.data.jobsApplied);
                
                setJobs(response.data);
            } 
            catch (error) {
                alert('Could not fetch user data. Please try again later.');
            }
        }
        fetchUserData();
    },[userId])
    // Ensure the user has applied jobs to display
    const appliedJobs = jobs?.jobsApplied || [];
    // console.log(appliedJobs);
    
    return (
        <div>
            <h2>Applied Jobs</h2>
            {appliedJobs.length > 0 ? (
                <ul>
                    {appliedJobs.map((job) => (
                        <div key={userId}>
                            <JobCard job={job} userId={userId} />
                        </div>
                    ))}
                </ul>
            ) : (
                <p>You have not applied for any jobs yet.</p>
            )}
        </div>
    );
};

export default AppliedJobs;