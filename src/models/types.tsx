import { Project } from "./models"

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
    IPProt?: string,
    category?: number,
    series?: string
}

export type generalState = {
    projects: Project[],
    formName: string,
    formSurname: string,
    formEmail: string,
    formAddress: string,
    formPhone: string;
}