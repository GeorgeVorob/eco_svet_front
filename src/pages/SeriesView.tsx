import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Series } from "../models/types";

function SeriesView() {
    let params = useParams();
    var mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    const [series, setSeries] = useState<Series[]>([]);

    return (<h1>Series View:{params.seriesName} for category: {params.CategoryId}</h1>)
}

export default SeriesView