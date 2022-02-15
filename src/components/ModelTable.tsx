import React, { useEffect, useRef, useState } from "react";
import { Model } from "../models/models";
import { getModels } from '../api/api'
import { Col, Row, Table } from "react-bootstrap";
import { Handle, Range, SliderTooltip } from 'rc-slider';
import { debounce } from "lodash";

import 'rc-slider/assets/index.css';
import '../css/ModelTable.css'
import { Link } from "react-router-dom";

export type ModelTableProps = {
    headerBgColor: string,
    headerTextColor: string
}

export type TableFilter = {
    name?: string,
    powFROM: number;
    powTO: number;
    lightFROM: number,
    lightTO: number,
    IPProt?: string
}

//TODO: деть это куда нибуть
const handle = (props: any) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <SliderTooltip
            prefixCls="rc-slider-tooltip"
            overlay={`${value}`}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </SliderTooltip>
    );
};

//TODO: вынести onChange фильтра в отдельные функции, если так окажется правильнее
const ModelTable = (props: ModelTableProps) => {

    const powerMAX = 500;
    const powerMIN = 0;

    const lightMAX = 20000;
    const lightMIN = 200;

    const [models, setModels] = useState<Model[]>([]);
    const [filter, setFilter] = useState<TableFilter>({
        name: "",
        powFROM: powerMIN,
        powTO: powerMAX,
        lightFROM: lightMIN,
        lightTO: lightMAX,
        IPProt: ""
    });

    var mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    const debouncedSearch = React.useRef(
        debounce(async (filter: TableFilter) => {
            getModels(filter)
                .then(res => {
                    if (mountedRef.current)
                        setModels(res);
                })
        }, 300)
    ).current;

    useEffect(() => {
        debouncedSearch(filter);
    }, [filter]);

    //cansel on page change
    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    useEffect(() => {
        getModels(filter)
            .then(res => {
                if (mountedRef.current)
                    setModels(res);
            })
    }, []);
    return (
        <>
            <Row style={{ textAlign: "center" }}>
                <Col sm={12}>
                    <input type="text" placeholder="Название модели"
                        value={filter.name ? filter.name : ""}
                        onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                    ></input>
                </Col>
            </Row>
            <Row>
                <Col style={{ marginRight: 10 }}>
                    <div>Мощность</div>
                    <Range
                        style={{ marginTop: 10, marginBottom: 21, width: "100%" }}
                        onChange={(e) => setFilter({ ...filter, powFROM: e[0], powTO: e[1] })}
                        min={powerMIN}
                        max={powerMAX}
                        value={[filter.powFROM, filter.powTO]}
                        allowCross={false}
                        handle={handle}
                        marks={{ 0: powerMIN, [powerMAX]: powerMAX }}
                        trackStyle={[{ backgroundColor: "#f0dd32" }]}
                        handleStyle={[{ borderColor: '#e0ce2d' }, { borderColor: '#e0ce2d' }]}
                        activeDotStyle={{ boxShadow: 'none !important' }}
                    />
                </Col>
                <Col>
                    <div>Световой поток</div>
                    <Range
                        style={{ marginTop: 10, marginBottom: 21, width: "100%" }}
                        onChange={(e) => setFilter({ ...filter, lightFROM: e[0], lightTO: e[1] })}
                        min={lightMIN}
                        max={lightMAX}
                        value={[filter.lightFROM, filter.lightTO]}
                        allowCross={false}
                        handle={handle}
                        marks={{ 0: lightMIN, [lightMAX]: lightMAX }}
                        trackStyle={[{ backgroundColor: "#f0dd32" }]}
                        handleStyle={[{ borderColor: '#e0ce2d' }, { borderColor: '#e0ce2d' }]}
                        activeDotStyle={{ boxShadow: 'none !important' }}
                    />
                </Col>
                <Col>
                    <select value={filter.IPProt} onChange={(e) => setFilter({ ...filter, IPProt: e.target.value })}>
                        <option value="" defaultChecked>Степень защиты</option>
                        <option value="IP66">IP66</option>
                        <option value="IP65">IP65</option>
                    </select>
                </Col>
            </Row>
            <table className="model-table smooth-hover" style={{ borderColor: props.headerBgColor }} >
                <tbody>
                    <tr
                        style={{ backgroundColor: props.headerBgColor, color: props.headerTextColor, position: "sticky", top: 0 }}
                    >
                        <td
                            style={{ width: "22.2%" }}
                        >Модель</td>
                        <td
                            style={{ width: "8.2%" }}
                        >Мощность, Вт</td>
                        <td
                            style={{ width: "14.2%" }}
                        >Световой поток (Tj=25°C), лм</td>
                        <td
                            style={{ width: "7.2%" }}
                        >Класс защиты, IP</td>
                        <td
                            style={{ width: "14.2%" }}
                        >Температура эксплуатации, C</td>
                        <td
                            style={{ width: "14.2%" }}
                        >Габариты, мм</td>
                        <td
                            style={{ width: "19.2%" }}
                        >Монтаж</td>
                    </tr>
                    {models.map((m, index) => {
                        return (
                            <Link
                                style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}
                                to={"/Models/" + m.id}>
                                <tr key={index}>
                                    <td
                                        style={{ width: "22.2%" }}
                                    >{m.name}</td>
                                    <td
                                        style={{ width: "8.2%" }}
                                    >{m.powerVT}</td>
                                    <td
                                        style={{ width: "14.2%" }}
                                    >{m.light_line}</td>
                                    <td
                                        style={{ width: "7.2%" }}
                                    >{m.protective_class}</td>
                                    <td
                                        style={{ width: "14.2%" }}
                                    >{"от " + m.tempFROM + " до " + m.tempTO}</td>
                                    <td
                                        style={{ width: "14.2%" }}
                                    >{m.size}</td>
                                    <td
                                        style={{ width: "19.2%" }}
                                    >{m.montage}</td>
                                </tr>
                            </Link>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ModelTable;