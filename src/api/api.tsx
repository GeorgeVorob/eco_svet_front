import { TableFilter } from '../components/ModelTable';
import { Category, Model, Project } from '../models/models';
import { getModelsFilter, Series } from '../models/types';
import { tmpSeries } from './tmp'


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

const getModeLImage = (id: number): Promise<string> => {

    return fetch("/getModeLImage?id=" + id)
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
    return fetch("/getCategories")
        .then(res => {
            return res.json();
        })
}

const getSeries = (): Promise<Series[]> => {
    return new Promise<Series[]>((resolve, reject) => {
        resolve(tmpSeries);
    });
}

const getModels = (filter: getModelsFilter): Promise<Model[]> => {
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
                delete el.pawerVT;

                el.tempFROM = el.temperatureROW;
                delete el.temperatureROW;

                el.tempTO = el.temperatureTO;
                delete el.temperatureTO;

                el.montage = el.motag;
                delete el.motag;

                el.photos = el.photo_models.map((p: any) => p.id);
                delete el.photo_models;
            });
            return json
        })
        .catch(res => {
            return [];
        })
}

export { getProjects, getProjectImage, getCategories, getModels, getModeLImage, getSeries }
