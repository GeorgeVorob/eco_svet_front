import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getSeries } from "../api/api";
import { SeriesCard } from "../components";
import { Series } from "../models/types";

const SeriesSelector = () => {
    let params = useParams();
    const [series, setSeries] = useState<Series[]>([]);
    var mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;

        getSeries(params.CategoryId as any)
            .then(res => {
                console.log("series response:", res);
                if (mountedRef.current)
                    setSeries(res);
            })

        return () => {
            mountedRef.current = false;
        };
    }, []);


    return (<h2>
        <Row style={{ paddingLeft: "20%", paddingRight: "20%" }}>
            {series.map((el, index) => {
                return (
                    <Col xl={4} lg={6} key={index} style={{ marginBottom: 20 }}>
                        <SeriesCard {...el} />
                    </Col>)
            })}
        </Row>
    </h2>);
}

export default SeriesSelector;