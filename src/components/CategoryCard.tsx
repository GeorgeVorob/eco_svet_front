import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { Category } from '../models/models'

import { getModeLImage } from '../api/api'

import '../css/CategoryCard.css'
import { Link, Route } from "react-router-dom";

const CategoryCard = (props: Category) => {
    {
        console.log("cat card props:", props);
        const [imgPath, setImgPath] = useState<string>("NOIMAGE");
        var mountedRef = useRef(false);
        useEffect(() => {
            mountedRef.current = true;

            return () => {
                mountedRef.current = false;
            };
        }, []);

        useEffect(() => {
            getModeLImage(props.imgid).then(str => {
                if (mountedRef.current)
                    setImgPath(str);
            }).catch(err => {
                console.log("image for " + props.imgid + " not found");
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
