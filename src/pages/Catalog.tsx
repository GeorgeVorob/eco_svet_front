import React, { useEffect, useState } from "react";
import { Category } from '../models/models'

import { CategoryCard, ModelTable } from "../components";
import { Col, Row } from "react-bootstrap";
import { getCategories } from "../api/api";
import { Outlet, Route, Routes } from "react-router-dom";


function Catalog() {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res);
        })
    });

    return (
        <>
            <Row style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                {categories.map(e => {
                    return (
                        <Col xl={4} lg={6} key={e.id} style={{ marginBottom: 20 }}>
                            <CategoryCard {...e} />
                        </Col>
                    )
                })}
            </Row>
            <Row style={{ paddingLeft: "10%", paddingRight: "10%", marginTop: 40 }}>
                <ModelTable headerBgColor="#1c1c1c" headerTextColor="white" />
            </Row>
            <Outlet />
        </>
    )
}

export default Catalog