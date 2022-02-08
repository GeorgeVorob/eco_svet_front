import React, { useEffect, useState } from "react";

import { Card } from 'react-bootstrap'
import { getProjectImage } from "../api/api";
import '../css/ProjectCard.css'
import { Project } from "../models/models";

function ProjectCard(props: Project) {

    const [imgPath, setImgPath] = useState<string>("NOIMAGE");

    useEffect(() => {
        getProjectImage(props.photos[0]).then(str => {
            setImgPath(str);
        }).catch(err => {
            console.log("image for " + props.name + " not found");
            setImgPath("./noimage.png");
        })
    }, []);

    return (
        <Card
            className="card"
        >
            <Card.Img
                variant="top"
                src={imgPath}
            >
            </Card.Img>
            <Card.Body>
                <Card.Title className="main-font-2">
                    {props.name}
                </Card.Title>
            </Card.Body>
        </Card >
    )
}

export default ProjectCard