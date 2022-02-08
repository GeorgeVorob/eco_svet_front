export type Project = {
    id: number,
    name: string,
    photos: number[];
};

export type Category = {
    id: number,
    name: string,
    imgID: number
};

export type Model = {
    name: string,
    powerVT: number,
    light_line: number,
    IP_protection: number,
    temp: string,
    size: string,
    montage: string
}