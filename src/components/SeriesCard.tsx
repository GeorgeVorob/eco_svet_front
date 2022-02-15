import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { getModeLImage } from '../api/api'

import '../css/CategoryCard.css'
import { Link } from "react-router-dom";
import { Series } from "../models/types";
import { useParams } from "react-router-dom";

const SeriesCard = (props: Series) => {

    let params = useParams();
    const [imgPath, setImgPath] = useState<string>("NOIMAGE");
    var mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    useEffect(() => {
        getModeLImage(props.imgID).then(str => {
            if (mountedRef.current)
                setImgPath(str);
        }).catch(err => {
            console.log("image for " + props.imgID + " not found");
            if (mountedRef.current)
                setImgPath("./noimage.png");
        })
    }, []);

    return (
        <Card
            className="category-card"
        >
            <Card.Img
                variant="top"
                src={imgPath}
            >
            </Card.Img>
            <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to={"/Catalog/" + params.CategoryId + "/" + props.name}>
                <Card.Body style={{ backgroundColor: "#323232" }} className="smooth-hover dark-hover">
                    <Card.Title style={{ color: "white" }}>
                        {props.name}
                    </Card.Title>
                </Card.Body>
            </Link>
        </Card >
    )

}

export default SeriesCard
