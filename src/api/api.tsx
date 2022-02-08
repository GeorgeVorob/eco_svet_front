import { resolve } from 'node:path/win32';
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

const getModels = (): Promise<Model[]> => {
    // return fetch("/getModel")
    //     .then(res => {
    //         return res.json() as any;
    //     })
    return new Promise<Model[]>((resolve, reject) => {
        resolve(tmpMods);
    });
}

export { getProjects, getProjectImage, getCategories, getModels }