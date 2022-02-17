import React, { useEffect, useRef, useState } from "react";

import { Card } from 'react-bootstrap'
import { getProjectImage } from "../api/api";
import '../css/ProjectCard.css'
import { Project } from "../models/models";

function ProjectCard(props: Project) {

    const [imgPath, setImgPath] = useState<string>("NOIMAGE");

    var mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    useEffect(() => {
        getProjectImage(props.photos[0]).then(str => {
            if (mountedRef.current)
                setImgPath(str);
        }).catch(err => {
            console.log("image for " + props.name + " not found");
            if (mountedRef.current)
                setImgPath("/noimage.png");
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