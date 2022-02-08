import React, { useEffect, useState } from "react";
import { Category } from '../models/models'

import { CategoryCard, ModelTable } from "../components";
import { Col, Row } from "react-bootstrap";
import { getCategories } from "../api/api";


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
                        <Col xl={4} lg={6} key={e.id}><CategoryCard {...e} /></Col>
                    )
                })}
            </Row>
            <Row style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <ModelTable headerBgColor="black" headerTextColor="white" />
            </Row>
        </>
    )
}

export default Catalog