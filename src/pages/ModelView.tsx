import { useParams } from "react-router-dom"
function ModelView() {
    let params = useParams();
    return (<h1>view model at id: {params.ModelId}</h1>)
}

export default ModelView