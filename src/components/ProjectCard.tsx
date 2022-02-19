import React, { useEffect, useRef, useState } from "react";

import { Card, Carousel, Modal } from 'react-bootstrap'
import { JsxElement } from "typescript";
import { getProjectImageURL } from "../api/api";
import '../css/ProjectCard.css'
import { Project } from "../models/models";
import { apiAddr } from "../config";

function ProjectCard(props: Project) {

    const [imgPath, setImgPath] = useState<string>("NOIMAGE");
    const [clicked, setClicked] = useState<boolean>(false);
    const [imgArray, setImgArray] = useState<string[]>([]);

    var mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    if (clicked) {
        props.photos.forEach(element => {

        });
    }

    return (
        <>
            <Card
                className="card"
            >
                <Card.Img
                    variant="top"
                    src={getProjectImageURL(props.photos[0])}
                    onClick={() => { if (mountedRef.current) setClicked(true) }}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "/noimage.png";
                    }}
                >
                </Card.Img>
                <Card.Body>
                    <Card.Title className="main-font-2">
                        {props.name}
                    </Card.Title>
                </Card.Body>
            </Card >
            <Modal
                show={clicked}
                size="lg"
                onHide={() => { if (mountedRef.current) setClicked(false) }}
                className="project-modal"
            >
                <Modal.Body
                    className="project-modal"
                >
                    <Carousel>
                        {props.photos.map((p, index) => {
                            return (
                                <Carousel.Item
                                    key={index}
                                >
                                    <img
                                        style={{ maxHeight: "100vh", objectFit: "scale-down", width: "100%" }}
                                        src={apiAddr + "/getProjectImage?id=" + p}
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = "/noimage.png";
                                        }}
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard
