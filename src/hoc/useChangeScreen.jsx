import { useState, useEffect } from "react";

export const useChangeScreen = (maxWidth) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth <= maxWidth);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth <= maxWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [maxWidth]);

    return screenWidth;
}