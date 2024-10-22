// src/ProjectList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list">
            {projects.map((project) => (
                    <Link to={`/projects/${project.id}`}>

                <div className="project-card" key={project.id}>
                        <img src={project.image_url} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                </div>
                </Link>

            ))}
        </div>
    );
};

export default ProjectList;