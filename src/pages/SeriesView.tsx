import { Col, Row } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { ModelTable } from "../components";

function SeriesView() {
    let params = useParams();
    const location = useLocation();

    return (<>
        <Row style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            <Col sm={6}>
                <img
                    src={(location.state as any).img}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "/noimage.png";
                    }}
                    style={{ marginLeft: 100, height: 400, objectFit: "scale-down" }}
                ></img>
            </Col>
            <Col sm={6}>
                <h2 style={{ marginTop: 80 }}>Модельный ряд {params.seriesName} </h2>
            </Col>
        </Row>
        <Row style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            <ModelTable headerBgColor="#f0dd32" headerTextColor="black" externalFilter={{ series: params.seriesName }} />
        </Row>
    </>
    )
}

export default SeriesView