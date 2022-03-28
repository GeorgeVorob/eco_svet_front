import { useEffect, useRef, useState } from "react";

import { Card, Carousel, Modal } from 'react-bootstrap'
import { getProjectImageURL } from "../api/api";
import '../css/ProjectCard.css'
import { Project } from "../models/models";
import { apiAddr } from "../config";
import useMounted from "./useMounted";

function ProjectCard(props: Project) {
    const [clicked, setClicked] = useState<boolean>(false);
    var mountedRef = useMounted();

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
                className="transparent-modal"
            >
                <Modal.Body
                >
                    <Carousel>
                        {props.photos.map((p, index) => {
                            return (
                                <Carousel.Item
                                    key={index}
                                >
                                    <div style={{ height: "90vh" }}>
                                        <img
                                            style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
                                            src={apiAddr + "/getProjectImage?id=" + p}
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src = "/noimage.png";
                                            }}
                                        />
                                    </div>
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
