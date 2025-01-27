import React from 'react';
import axios from 'axios';
import './JobCard.css';

const JobCard = ({ job, userId }) => {
    const { title, company, experience, salary, location, description, tags, daysAgo, id } = job;

    const applyForJob = async () => {
        try {
            await axios.post(`http://localhost:8080/jobs/${id}/apply/${userId}`);
            alert('Successfully applied for the job.');
        } catch (error) {
            console.error('Failed to apply for job:', error);
            alert('Failed to apply for the job.');
        }
    };

    return (
        <div className="job-card">
            <div className="job-header">
                <div className="job-title-company">
                    <span className="job-title">{title}</span>
                    <span className="company-name">{company}</span>
                </div>
                <div className="company-logo">
                    <span className="logo-placeholder">{company.charAt(0).toUpperCase()}</span>
                </div>
            </div>
            <div className="job-details">
                <div className="job-info">
                    <span>{experience}</span>
                    <span>{salary}</span>
                    <span>{location}</span>
                </div>
                <div className="job-description">
                    <span>{description}</span>
                </div>
                <div className="job-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="job-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="job-footer">
                <span className="save-job">Save</span>
                <button className="apply-job" onClick={applyForJob}>
                    Apply
                </button>
            </div>
        </div>
    );
};

export default JobCard;
