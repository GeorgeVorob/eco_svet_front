import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { ProjectCard } from '../components'

import '../css/General.css'
import '../css/fontStyles.css'
import { Link } from "react-router-dom";
import Project from "../models/models";
import { getProjects } from "../api/api";

type generalState = {
    projects: Project[],
    formName: string,
    formSurname: string,
    formEmail: string,
    formAddress: string,
    formPhone: string;
}

function General() {

    const [state, setState] = useState<generalState>({
        projects: [],
        formName: "",
        formSurname: "",
        formEmail: "",
        formAddress: "",
        formPhone: ""
    });

    useEffect(() => {
        getProjects().then(res => setState({ ...state, projects: res }));
    }, [])

    const sendContacts = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log("data:", e);
        fetch("/live_contact", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: state.formName,
                surname: state.formSurname,
                email: state.formEmail,
                address: state.formAddress,
                phone: state.formPhone
            }),
        })
    }

    const formNameHandle = (e: any): void => {
        setState({ ...state, formName: e.target.value });
    }
    const formSurnameHandle = (e: any): void => {
        setState({ ...state, formSurname: e.target.value });
    }
    const formEmailHandle = (e: any): void => {
        setState({ ...state, formEmail: e.target.value });
    }
    const formAddressHandle = (e: any): void => {
        setState({ ...state, formAddress: e.target.value });
    }
    const formPhoneHandle = (e: any): void => {
        setState({ ...state, formPhone: e.target.value });
    }

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
                    onSubmit={sendContacts}
                >
                    <p className="main-font mb-4 ml-2 mr-2">оставить контакты</p>
                    <Form.Group>
                        <Form.Label className="mb-1">Имя</Form.Label>
                        <Form.Control type="text" onChange={(e) => formNameHandle(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Фамилия</Form.Label>
                        <Form.Control type="text" onChange={(e) => formSurnameHandle(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Эл. почта *</Form.Label>
                        <Form.Control type="text" required onChange={(e) => formEmailHandle(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Адрес</Form.Label>
                        <Form.Control type="text" onChange={(e) => formAddressHandle(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className="mb-1">Номер телефона</Form.Label>
                        <Form.Control type="text" onChange={(e) => formPhoneHandle(e)}></Form.Control>
                    </Form.Group>
                    <button className="btn formBtn main-font-1" style={{ width: "100%" }}>Отправить</button>
                </form>
            </div>
            <Row
                className="general-page-items"
            >
                {state.projects.map(e => { return (<ProjectCard key={e.id} id={e.id} name={e.name} photos={e.photos} />) })}
            </Row>
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <Link to="./Projects"
                    className="btn main-font-2"
                    style={{
                        color: "rgb(240, 221, 50)"
                    }}
                >
                    Узнать больше
                </Link>
            </div>
        </>
    )
}

export default General
