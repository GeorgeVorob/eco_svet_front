import React, { useEffect, useRef, useState } from "react";
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

        getSeries()
            .then(res => {
                if (mountedRef.current)
                    setSeries(res);
            })

        return () => {
            mountedRef.current = false;
        };
    }, []);


    return (<h2>
        CatId: {params.CategoryId}
        {series.map(el => {
            return <SeriesCard {...el} />
        })}
    </h2>);
}

export default SeriesSelector;