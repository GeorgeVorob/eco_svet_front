import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { ProjectCard } from '../components'

import '../css/General.css'

function General() {
    return (
        <>
            <div
                style={{ padding: "0px 0px 0px 0px" }}
            >
                <img
                    alt="earth_background"
                    src='./mainPageImage.png'
                    style={{ position: "absolute", zIndex: -1 }}
                >
                </img>
                <form
                    style={{ float: "right", marginRight: 81, maxWidth: "220px" }}
                    className="transparent-form"
                >
                    <p className="main-font mb-4 ml-2 mr-2">оставить контакты</p>
                    <Form.Group>
                        <Form.Label className="mb-1">Имя</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Фамилия</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Эл. почта *</Form.Label>
                        <Form.Control type="text" required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Адрес</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className="mb-1">Номер телефона</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <button className="btn formBtn" style={{ width: "100%" }}>Отправить</button>
                </form>
            </div>
            <Row
                className="general-page-items"
            >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Row>
        </>
    )
}

export default General

