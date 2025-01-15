import React from 'react';

const AppliedJobs = () => {
    // Retrieve the user object from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Ensure the user has applied jobs to display
    const appliedJobs = user?.jobsApplied || [];
    console.log(appliedJobs);
    

    return (
        <div>
            <h2>Applied Jobs</h2>
            {appliedJobs.length > 0 ? (
                <ul>
                    {appliedJobs.map((job) => (
                        <li key={job.id}>
                            <h3>{job.title}</h3>
                            <p>{job.description}</p>
                            <p>Location: {job.location}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You have not applied for any jobs yet.</p>
            )}
        </div>
    );
};

export default AppliedJobs;
