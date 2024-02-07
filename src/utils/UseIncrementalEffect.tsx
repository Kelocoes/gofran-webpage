import React from "react";

export const useIncrementalIndexEffect = (inView: boolean, maxIndex: number, intervalDuration: number): number => {
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    React.useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                if (currentIndex < maxIndex) {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                } else {
                    clearInterval(interval);
                }
            }, intervalDuration);

            return () => {
                clearInterval(interval);
            };
        }
        // eslint-disable-next-line
    }, [currentIndex, inView]);

    return currentIndex;
};
