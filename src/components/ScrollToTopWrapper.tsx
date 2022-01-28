import { useEffect } from "react";
import { useLocation } from "react-router";
import { JsxElement } from "typescript";

const ScrollToTopWrapper = (props: any) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollBy(0, -10000);
    }, [location]);

    return <>{props.children}</>
};

export default ScrollToTopWrapper