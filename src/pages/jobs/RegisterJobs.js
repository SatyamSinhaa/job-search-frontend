import React, { useState } from 'react';
import axios from 'axios';

const RegisterJobs = () => {

    const userId = JSON.parse(localStorage.getItem('userId'));
    console.log(userId);

    const [job, setJob] = useState({
        title: '',
        company: '',
        experience: '',
        salary: '',
        location: '',
        description: '',
        tags: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({
            ...job,
            [name]: value,
        });
    };

    const handleTagsChange = (e) => {
        const { value } = e.target;
        setJob({
            ...job,
            tags: value.split(','),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8080/jobs/create/${userId}`, job) // replace with your backend API endpoint
            .then((response) => {
                console.log('Job registered successfully', response);
            })
            .catch((error) => {
                console.error('There was an error registering the job!', error);
            });
    };

    return (
        <div className="job-registration">
            <h2>Register Job</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Job Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={job.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={job.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="experience">Experience Required:</label>
                    <input
                        type="text"
                        id="experience"
                        name="experience"
                        value={job.experience}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="salary">Salary:</label>
                    <input
                        type="text"
                        id="salary"
                        name="salary"
                        value={job.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={job.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Job Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={job.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tags">Tags (comma separated):</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={job.tags.join(', ')}
                        onChange={handleTagsChange}
                    />
                </div>
                <button type="submit">Register Job</button>
            </form>
        </div>
    );
};

export default RegisterJobs;
