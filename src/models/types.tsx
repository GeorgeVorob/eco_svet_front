export type Series = {
    name: string,
    imgID: number
}

export type getModelsFilter = {
    id?: number,
    name?: string,
    powFROM?: number;
    powTO?: number;
    lightFROM?: number,
    lightTO?: number,
    IPProt?: string
}