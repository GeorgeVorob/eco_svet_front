import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { ProjectCard } from '../components'

import '../css/General.css'
import '../css/fontStyles.css'
import { Link } from "react-router-dom";
import { Project } from "../models/models";
import { getProjects, sendContacts } from "../api/api";
import { generalState } from "../models/types";

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

    const sendContactsHandle = (e: React.FormEvent): void => {
        e.preventDefault();

        sendContacts(state);
        setState({
            ...state,
            formName: "",
            formSurname: "",
            formEmail: "",
            formAddress: "",
            formPhone: ""
        });
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
                style={{ padding: "0px 0px 0px 0px", backgroundImage: 'url(./mainPageImage.png)', backgroundRepeat: "repeat-x" }}
            >
                <form
                    style={{ float: "right", marginRight: 81, maxWidth: "220px" }}
                    className="transparent-form"
                    onSubmit={sendContactsHandle}
                >
                    <p className="main-font mb-4 ml-2 mr-2">оставить контакты</p>
                    <Form.Group>
                        <Form.Label className="mb-1">Имя</Form.Label>
                        <Form.Control type="text" onChange={(e) => formNameHandle(e)} value={state.formName}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Фамилия</Form.Label>
                        <Form.Control type="text" onChange={(e) => formSurnameHandle(e)} value={state.formSurname}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Эл. почта *</Form.Label>
                        <Form.Control type="email" required onChange={(e) => formEmailHandle(e)} value={state.formEmail}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1">Адрес</Form.Label>
                        <Form.Control type="text" onChange={(e) => formAddressHandle(e)} value={state.formAddress}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label className="mb-1">Номер телефона</Form.Label>
                        <Form.Control type="text" onChange={(e) => formPhoneHandle(e)} value={state.formPhone}></Form.Control>
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
