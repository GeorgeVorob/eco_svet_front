import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Category } from '../models/models'

import { getProjectImage } from '../api/api'

import '../css/CategoryCard.css'

const CategoryCard = (props: Category) => {
    {
        const [imgPath, setImgPath] = useState<string>("NOIMAGE");

        useEffect(() => {
            getProjectImage(props.imgID).then(str => {
                setImgPath(str);
            }).catch(err => {
                console.log("image for " + props.imgID + " not found");
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
                <Card.Body style={{ backgroundColor: "#323232" }} className="smooth-hover dark-hover">
                    <Card.Title style={{ color: "white" }}>
                        {props.name}
                    </Card.Title>
                </Card.Body>
            </Card >
        )
    }
}

export default CategoryCard
