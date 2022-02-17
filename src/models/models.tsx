export type Project = {
    id: number,
    name: string,
    photos: number[];
};

export type Category = {
    id: number,
    name: string,
    imgid: number
};

export type Model = {
    id: number,
    name: string,
    powerVT: number,
    light_line: number,
    protective_class: number,
    tempFROM: number,
    tempTO: number,
    size: string,
    montage: string,
    photos: number[]
}