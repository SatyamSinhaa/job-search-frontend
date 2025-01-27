import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../../components/jobcard/JobCard';

const ListOfJobs = () => {
    const [jobs, setJobs] = useState([]);
    const userId = JSON.parse(localStorage.getItem('userId'));

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

    return (
        <div>
            <h2>List of Jobs</h2>
            <ul>
                {jobs.map((job) => (
                    <div key={job.id}>
                        <JobCard job={job} userId={userId} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ListOfJobs;
