import { resolve } from 'node:path/win32';
import { TableFilter } from '../components/ModelTable';
import { Category, Model, Project } from '../models/models';
import { tmpCats, tmpMods } from './tmp'


const getProjects = (): Promise<Project[]> => {
    return fetch("/getProject")
        .then(res => {
            let a: Project[] = res.json() as any;
            return a;
        });
}


const getProjectImage = (id: number): Promise<string> => {

    return fetch("/getProjectImage?id=" + id)
        .then(res => {
            if (res.status === 404) {
                const err = new Error("image not found");
                throw err;
            } else return res
        })
        .then(response => response.blob())
        .then(imageBlob => {
            const string: string = URL.createObjectURL(imageBlob);
            return string;
        });
}

const getCategories = (): Promise<Category[]> => {
    return new Promise<Category[]>((resolve, reject) => {
        resolve(tmpCats);
    });
}

const getModels = (filter: TableFilter): Promise<Model[]> => {
    if (filter.name === "") delete filter.name;
    if (filter.IPProt === "") delete filter.IPProt;

    return fetch("/getModel?" + new URLSearchParams(filter as any))
        .then(res => {
            if (res.status != 404) {
                return res.json() as any;
            }
            else return [];
        })
        .then((json: any) => {
            json.map((el: any) => {
                //TODO: переименовать поля в базе
                el.powerVT = el.pawerVT;
                delete el.parwerVT;

                el.tempFROM = el.temperatureROW;
                el.tempTO = el.temperatureTO;
                el.montage = el.motag;
            });
            return json
        })
        .catch(res => {
            return [];
        })
}

export { getProjects, getProjectImage, getCategories, getModels }