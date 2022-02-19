import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { Category } from '../models/models'

import { getModeLImageURL } from '../api/api'

import '../css/CategoryCard.css'
import { Link, Route } from "react-router-dom";

const CategoryCard = (props: Category) => {
    {
        const [imgPath, setImgPath] = useState<string>("NOIMAGE");
        var mountedRef = useRef(false);
        useEffect(() => {
            mountedRef.current = true;

            return () => {
                mountedRef.current = false;
            };
        }, []);

        return (
            <Card
                className="category-card"
            >
                <Card.Img
                    variant="top"
                    src={getModeLImageURL(props.imgid)}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "/noimage.png";
                    }}
                >
                </Card.Img>
                <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={"/Catalog/" + props.id}>
                    <Card.Body style={{ backgroundColor: "#323232" }} className="smooth-hover dark-hover">
                        <Card.Title style={{ color: "white" }}>
                            {props.name}
                        </Card.Title>
                    </Card.Body>
                </Link>
            </Card >
        )
    }
}

export default CategoryCard
