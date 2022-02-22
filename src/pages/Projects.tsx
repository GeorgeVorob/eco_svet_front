import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { getCategories, getProjects } from "../api/api";
import { CategoryCard, ProjectCard } from "../components";
import { Category, Project } from "../models/models";

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(res => {
            setProjects(res);
        })
    }, []);
    return (
        <>
            <Row style={{ paddingLeft: "20%", paddingRight: "20%", marginTop: "55px" }}>
                {projects.map(e => { return (<ProjectCard key={e.id} id={e.id} name={e.name} photos={e.photos} />) })}
            </Row>
        </>
    )
}

export default Projects