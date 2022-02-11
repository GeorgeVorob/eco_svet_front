import React from "react";
import { useParams } from "react-router-dom";

const SeriesSelector = () => {
    let params = useParams();
    return (<h2>
        CatId: {params.CategoryId}
    </h2>);
}

export default SeriesSelector;