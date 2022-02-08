import { Category, Model } from "../models/models";

const tmpMods: Model[] = [
    {
        name: "model 1",
        powerVT: 111,
        light_line: 1111,
        IP_protection: 1,
        temp: "110",
        size: "100",
        montage: "Одиночный"
    },
    {
        name: "model 2",
        powerVT: 222,
        light_line: 2222,
        IP_protection: 2,
        temp: "220",
        size: "200",
        montage: "Двойной"
    }
]

const tmpCats: Category[] = [
    {
        id: 1,
        name: "Улица",
        imgID: 5
    },
    {
        id: 2,
        name: "Производство, склад",
        imgID: 6
    },
    {
        id: 3,
        name: "Улица",
        imgID: 7
    },
    {
        id: 4,
        name: "Производство, склад",
        imgID: 8
    },
    {
        id: 5,
        name: "Улица",
        imgID: 9
    },
    {
        id: 6,
        name: "Производство, склад",
        imgID: 15
    }
];

export { tmpCats, tmpMods }