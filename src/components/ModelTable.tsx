import React, { useEffect, useState } from "react";
import { Model } from "../models/models";
import { getModels } from '../api/api'
import { Col, Row } from "react-bootstrap";
import { Handle, Range, SliderTooltip } from 'rc-slider';
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import useMounted from "./useMounted";
import 'rc-slider/assets/index.css';
import '../css/ModelTable.css'

export type ModelTableProps = {
    headerBgColor: string,
    headerTextColor: string,
    externalFilter?: {
        name?: string,
        category?: number,
        series?: string
    }
}

export type TableFilter = {
    name?: string,
    powFROM: number;
    powTO: number;
    lightFROM: number,
    lightTO: number,
    protective_class?: string
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

    var mountedRef = useMounted();

    const powerMAX = 1300;
    const powerMIN = 0;

    const lightMAX = 200000;
    const lightMIN = 0;

    const [models, setModels] = useState<Model[]>([]);
    const [filter, setFilter] = useState<TableFilter>({
        name: "",
        powFROM: powerMIN,
        powTO: powerMAX,
        lightFROM: lightMIN,
        lightTO: lightMAX,
        protective_class: ""
    });

    const debouncedSearch = React.useRef(
        debounce(async (filter: TableFilter, _props: ModelTableProps) => {
            getModels({ ...filter, ..._props?.externalFilter })
                .then(res => {
                    if (mountedRef.current)
                        setModels(res);
                })
        }, 300)
    ).current;

    useEffect(() => {
        debouncedSearch(filter, props);
    }, [filter, props?.externalFilter]);

    //cancel on page change
    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    const navigate = useNavigate();
    const rowClickHandle = (id: number) => {
        //@ts-ignore
        navigate("/Models/" + id);
    }
    return (
        <>
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
                    <select value={filter.protective_class} onChange={(e) => setFilter({ ...filter, protective_class: e.target.value })}>
                        <option value="" defaultChecked>Степень защиты</option>
                        <option value="IP66">IP66</option>
                        <option value="IP65">IP65</option>
                        <option value="IP54">IP54</option>
                        <option value="IP20">IP20</option>
                        <option value="IP40">IP40</option>
                        <option value="IP67">IP67</option>
                        <option value="IP30">IP30</option>
                        <option value="IP31">IP31</option>
                        <option value="IP32">IP32</option>
                    </select>
                </Col>
            </Row>
            {/*BUG //TODO: заголовок таблицы мерцает в firefox, если прокручивать таблицу и водить мышкой по скроллбару. Сделал костыль, как оно багует см. коммит
            f3a5567095e477accc5bbcc417a3aa49151f1ca5
            */}
            <tr
                style={{ backgroundColor: props.headerBgColor, color: props.headerTextColor, position: "sticky", top: 0, textAlign: "center", display: "flex", alignItems: "center" }}
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

            <table className="model-table smooth-hover" style={{ borderColor: props.headerBgColor }} >
                <tbody>
                    {models.map((m, index) => {
                        return (
                            <tr key={index} onClick={() => rowClickHandle(m.id)} style={{ display: "flex" }}>
                                <td
                                    style={{ width: "24.2%" }}
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
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ModelTable;
