import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTopWrapper = (props: any) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollBy(0, -10000);
    }, [location]);

    return <>{props.children}</>
};

export default ScrollToTopWrapper