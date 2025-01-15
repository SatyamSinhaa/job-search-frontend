import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListOfJobs = () => {
    const [jobs, setJobs] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:8080/jobs/display');
                setJobs(response.data);
            } catch (error) {
                console.error('Failed to fetch jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    const applyForJob = async (jobId) => {
        try {
            await axios.post(`http://localhost:8080/jobs/${jobId}/apply/${user.userId}`);
            alert('Successfully applied for the job.');
        } catch (error) {
            console.error('Failed to apply for job:', error);
            alert('Failed to apply for the job.');
        }
    };

    return (
        <div>
            <h2>List of Jobs</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <p>Location: {job.location}</p>
                        <button onClick={() => applyForJob(job.id)}>Apply</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListOfJobs;