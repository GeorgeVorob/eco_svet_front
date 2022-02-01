import React from "react";
import { Col } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Contacts() {
    return (
        <>
            <Col style={{ marginLeft: 100 }}>
                <MapContainer center={[54.895406, 83.105271]} zoom={16} scrollWheelZoom={false} style={{ height: 630 }}>
                    <TileLayer
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                        url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                    />
                    <Marker position={[54.895406, 83.105271]}>
                        <Popup>
                            Наш Офис <br /> <a href="https://www.google.com/maps/dir/?api=1&destination=%D1%83%D0%BB.%20%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0%D1%8F%20%D0%93%D0%BE%D1%80%D0%BA%D0%B0,%201,%20%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA,%20%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.,%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,%20630060">

                                Маршрут
                            </a>
                        </Popup>
                    </Marker>
                </MapContainer>
            </Col>
            <Col style={{ fontFamily: "Play, sans-serif", fontSize: "19px", fontWeight: "900", color: "rgb(160, 147, 33)" }}>Наши Контакты<br />
                ООО "ЭкоСвет"<br />
                <span style={{ lineHeight: "42px" }}>ИНН 5408009182</span><br />
                Юридический адрес: 630090, г. Новосибирск, ул. Терешковой, 6-80<br />
                Фактический адрес: г. Новосибирск, ул. Зеленая Горка, 1, офис 213<br />
                Телефон: +7-913-759-2717<br />
                e-mail: leonova_larisa@mail.ru<br />
            </Col>
        </>
    )
}

export default Contacts