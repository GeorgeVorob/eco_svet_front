import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { Model } from "../models/models";
import { getModeLImageURL, getModels, sendTTXRequest } from "../api/api"
import useMounted from "../components/useMounted";
import "../css/ModelView.css"

function ModelView() {
    let params = useParams();
    var mountedRef = useMounted();
    const [data, setData] = useState<Model>();
    const [imgPath, setImgPath] = useState<string>();
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        getModels({ id: params.ModelId as any })
            .then(res => {
                if (mountedRef.current) {
                    setData(res[0]);
                }
                return res;
            })
            .then(res => {
                if (mountedRef.current)
                    setImgPath(getModeLImageURL(res[0].photos[0]));
            })
            .catch(err => {
                if (mountedRef.current)
                    setImgPath("/noimage.png");
            })
            ;
    }, []);

    const requestTTXHandle = (e: React.FormEvent) => {
        e.preventDefault();
        sendTTXRequest(email, data?.id as any);
        setEmail("");
    }

    return (
        <>
            <Row style={{ width: "70%", maxHeight: 680 }}>
                <Col sm={6} style={{ height: "100%" }}>
                    <img
                        src={imgPath} style={{ width: "100%", height: "100%", objectFit: "scale-down" }}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "/noimage.png";
                        }}
                    ></img>
                </Col>
                <Col sm={6} style={{ padding: "10px 0px 20px 40px" }}>
                    <table className="model-view-table">
                        <thead>
                            <tr>
                                <th colSpan={2}>{data?.name}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Мощность, Вт</td>
                                <td>{data?.powerVT}</td>
                            </tr>
                            <tr>
                                <td>Световой поток (Tj=25°C), лм</td>
                                <td>{data?.light_line}</td>
                            </tr>
                            <tr>
                                <td>Класс защиты, IPт</td>
                                <td>{data?.protective_class}</td>
                            </tr>
                            <tr>
                                <td>Температура эксплуатации, C</td>
                                <td>{"от " + data?.tempFROM + " до " + data?.tempTO}</td>
                            </tr>
                            <tr>
                                <td>Габариты, мм</td>
                                <td>{data?.size}</td>
                            </tr>
                            <tr>
                                <td>Монтаж</td>
                                <td>{data?.montage}</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <form style={{ width: "70%", textAlign: "end" }}>
                <input
                    type="email"
                    placeholder="Эл. почта"
                    required
                    style={{ marginRight: "20px" }}
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                ></input>
                <button className="btn formBtn main-font-1" onClick={(e: any) => requestTTXHandle(e)}>Прислать подробные характеристики</button>
            </form>
        </>
    )
}

export default ModelView