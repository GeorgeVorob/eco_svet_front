import React from "react";

import { Card } from 'react-bootstrap'
import '../css/ProjectCard.css'

function ProjectCard() {
    return (
        <Card
            className="project-card"
        >
            <Card.Img
                variant="top"
                src='./testImg.webp'
            >
            </Card.Img>
            <Card.Body>
                <Card.Title className="main-font-2">
                    project name lololololololololololololololol
                </Card.Title>
            </Card.Body>
        </Card >
    )
}

export default ProjectCard