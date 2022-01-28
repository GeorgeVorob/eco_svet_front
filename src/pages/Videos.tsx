import React from "react";

function Videos() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("http://26.76.8.234:3000/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <h2>videos page, data: {data}</h2>
    )
}

export default Videos
