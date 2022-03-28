import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer
            style={{ textAlign: "center", marginTop: "100px" }}
        >
            <span
                className="main-font-2"
                style={{
                    color: "rgb(240, 221, 50)"
                }}
            >поставщики</span>
            <Row
                style={{ marginTop: "20px" }}
            >
                <Col>
                    <img
                        src="/ferex.png"
                        alt="ferex"
                        style={{ objectFit: "contain" }}
                    />
                </Col>
                <Col>
                    <img
                        src="/promled.png"
                        alt="promled"
                        style={{ objectFit: "contain" }}
                    />
                </Col>
                <Col>
                    <img
                        src="/duray.png"
                        alt="duray"
                        style={{ objectFit: "contain" }}
                    />
                </Col>
            </Row>
        </footer>
    );
}

export default Footer