import { useState } from "react";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";

import '../css/YTPlayer.css'


export default function YTPlayer(props: { id: string, name: string }) {

    const [opened, setOpened] = useState<boolean>(false);

    return (<>
        <div className="video-card">
            <div
                className="thumbnail"
                style={{ position: "relative", height: "330px", width: "100%", overflow: "hidden" }}
                onClick={() => setOpened(true)}
            >
                {/*TODO: highres thumbnails?*/}
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={"https://i3.ytimg.com/vi/" + props.id + "/hqdefault.jpg"}
                />
                <div className="hide">
                    Смотреть
                </div>
            </div>
            <h4 style={{ marginTop: "15px" }}>{props.name}</h4>
        </div>
        <Modal
            show={opened}
            size="xl"
            onHide={() => { setOpened(false) }}
            className="transparent-modal"
            centered
        >
            <Modal.Body>
                <YouTube
                    videoId={props.id}
                ></YouTube>
            </Modal.Body>
        </Modal>
    </>);
}
