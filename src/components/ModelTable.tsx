import React, { useEffect, useState } from "react";
import { Model } from "../models/models";
import { getModels } from '../api/api'
import { Table } from "react-bootstrap";

import '../css/ModelTable.css'

export type ModelTableProps = {
    headerBgColor: string,
    headerTextColor: string
}

const ModelTable = (props: ModelTableProps) => {
    const [models, setModels] = useState<Model[]>([]);

    useEffect(() => {
        getModels()
            .then(res => {
                setModels(res);
            })
    }, []);

    return (
        <>
            <Table hover className="model-table" style={{ borderColor: props.headerBgColor }}>
                <thead
                    style={{ backgroundColor: props.headerBgColor, color: props.headerTextColor }}
                >
                    <tr>
                        <th>Название</th>
                        <th>Мощность, Вт</th>
                        <th>Световой поток (Tj=25°C), лм</th>
                        <th>Класс защиты, IP</th>
                        <th>Температура эксплуатации, C</th>
                        <th>Габариты, мм</th>
                        <th>Монтаж</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(m => {
                        return (
                            <tr key={m.name}>
                                <td>{m.name}</td>
                                <td>{m.powerVT}</td>
                                <td>{m.light_line}</td>
                                <td>{m.IP_protection}</td>
                                <td>{m.temp}</td>
                                <td>{m.size}</td>
                                <td>{m.montage}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default ModelTable;