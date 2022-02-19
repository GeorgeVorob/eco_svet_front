import { TableFilter } from '../components/ModelTable';
import { Category, Model, Project } from '../models/models';
import { getModelsFilter, Series } from '../models/types';
import { tmpSeries } from './tmp'
import { apiAddr } from '../config';

const getProjects = (): Promise<Project[]> => {
    return fetch(apiAddr + "/getProject")
        .then(res => {
            let a: Project[] = res.json() as any;
            return a;
        });
}


const getProjectImageURL = (id: number): string => {
    return apiAddr + "/getProjectImage?id=" + id;
}

const getModeLImageURL = (id: number): string => {
    return apiAddr + "/getModeLImage?id=" + id;
}

const getCategories = (): Promise<Category[]> => {
    return fetch(apiAddr + "/getCategories")
        .then(res => {
            return res.json();
        })
}

const getSeries = (catId: number): Promise<Series[]> => {
    return fetch(apiAddr + "/getSeries?id=" + catId)
        .then(res => {
            return res.json();
        }).then(json => {
            json.map((el: any) => {
                el.name = el.series;
                el.imgID = el.photo_models.length > 0 ? el.photo_models[0].id : null;
            });
            return json;
        })
}
const getSeriesImage = (name: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        resolve("/noimage.png");
    })
}

const getModels = (filter: getModelsFilter): Promise<Model[]> => {
    if (filter.name === "") delete filter.name;
    if (filter.IPProt === "") delete filter.IPProt;

    return fetch(apiAddr + "/getModel?" + new URLSearchParams(filter as any))
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

export { getProjects, getProjectImageURL, getCategories, getModels, getModeLImageURL, getSeries, getSeriesImage }
