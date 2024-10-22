// src/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
    const { id } = useParams(); // Get the project ID from the URL
    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>{project.title}</h1>
            <img src={project.image_url} alt={project.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
            <p>{project.description}</p>
            <a href={project.project_url} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectDetail;