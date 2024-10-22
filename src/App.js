// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://artech-test-backend.vercel.app/projects');
            const data = await response.json();
            setProjects(data);
        };
        fetchData();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProjectList projects={projects} />} />
                <Route path="/projects/:id" element={<ProjectDetail projects={projects} />} />
            </Routes>
        </Router>
    );
};

export default App;