import { useEffect, useState } from "react"

const useDisplayWidth = () => {
    const [width, setWidth] = useState<number>(global?.window?.innerWidth || 0);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.onresize = handleResize;
        return () => {
            window.onresize = null;
        }
    }, []);

    return width;
}

export default useDisplayWidth;