import { Card } from "react-bootstrap";
import { getModeLImageURL } from '../api/api'

import '../css/CategoryCard.css'
import { Link } from "react-router-dom";
import { Series } from "../models/types";
import { useParams } from "react-router-dom";

const SeriesCard = (props: Series) => {
    let params = useParams();

    return (
        <Card
            className="category-card"
        >
            <Card.Img
                variant="top"
                src={getModeLImageURL(props.imgID)}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "/noimage.png";
                }}
            >
            </Card.Img>
            <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to={"/Catalog/" + params.CategoryId + "/" + props.name}
                state={{ img: getModeLImageURL(props.imgID) }}
            >
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
