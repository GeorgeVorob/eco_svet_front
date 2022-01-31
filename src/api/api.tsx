import Project from '../models/models';

const getProjects = (): Promise<Project[]> => {
    return fetch("/getProject")
        .then(res => {
            let a: Project[] = res.json() as any;
            return a;
        });
}


const getImage = (id: number): Promise<string> => {

    return fetch("/getImage?id=" + id)
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

export { getProjects, getImage }