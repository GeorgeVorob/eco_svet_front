import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { Model } from "../models/models";
import { getModeLImage, getModels } from "../api/api"
import { Table } from "react-bootstrap"

import "../css/ModelView.css"

function ModelView() {
    let params = useParams();
    const [data, setData] = useState<Model>();
    const [imgPath, setImgPath] = useState<string>();

    //TODO: вынести это в хук
    var mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    useEffect(() => {
        getModels({ id: params.ModelId as any })
            .then(res => {
                if (mountedRef.current) {
                    setData(res[0]);
                }
                return res;
            })
            .then(res => {
                return getModeLImage(res[0].photos[0]).then(str => {
                    if (mountedRef.current)
                        setImgPath(str);
                })
            })
            .catch(err => {
                if (mountedRef.current)
                    setImgPath("/noimage.png");
            })
            ;
    }, []);

    return (
        <>
            <Row style={{ width: "70%", maxHeight: 680 }}>
                <Col sm={6} style={{ height: "100%" }}>
                    <img src={imgPath} style={{ width: "100%", height: "100%", objectFit: "scale-down" }}></img>
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
                <input type="email" placeholder="Эл. почта" required style={{ marginRight: "20px" }}></input>
                <button className="btn formBtn main-font-1">Прислать подробные характеристики</button>
            </form>
        </>
    )
}

export default ModelView