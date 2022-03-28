import { Row, Col } from "react-bootstrap";
import { YTPlayer } from "../components";


//TODO: не хватает видео про освещенность
function Videos() {
    return (<>
        <Row style={{ padding: "50px 50px 0px 50px" }}>
            <Col sm={4}>
                <YTPlayer id="7zK-11laFkI" name="Степень защиты"></YTPlayer>
            </Col>
            <Col sm={4}>
                <YTPlayer id="9BYHeR3wgkA" name="Световой поток"></YTPlayer>
            </Col>
            <Col sm={4}>
                <YTPlayer id="_yyudopmg8E" name="Цветовая температура"></YTPlayer>
            </Col>
            <Col sm={4}>
                <YTPlayer id="3rw1yfTw_Mg" name="Коэффициент пульсаций"></YTPlayer>
            </Col>
            <Col sm={4}>
                <YTPlayer id="Fx3qofVEe0I" name="Срок службы"></YTPlayer>
            </Col>
            <Col sm={4}>
                <YTPlayer id="VGN43_yuA9U" name="Индекс цветопередачи"></YTPlayer>
            </Col>
            <Col sm={4}>
                <YTPlayer id="JXPP_3wfnbs" name="Кривая силы света"></YTPlayer>
            </Col>
            <Col sm={4}>
                <YTPlayer id="V31YGlIsMyg" name="Коэффициент мощности"></YTPlayer>
            </Col>
            <Col sm={4}>
                <YTPlayer id="_6dp_QdG8OI" name="Световая отдача"></YTPlayer>
            </Col>
        </Row>
    </>)
}

export default Videos
