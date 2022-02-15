import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { getCategories } from "../api/api";
import { CategoryCard } from "../components";
import { Category } from "../models/models";

function Projects() {
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
        </>
    )
}

export default Projects