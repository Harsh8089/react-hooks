import { useEffect, useState } from "react";

export const useStopWatch = (play: boolean) => {
    const [timerCount, setTimerCount] = useState<number>(0);
    const [timer, setTimer] = useState();

    useEffect(() => {
        let interval: any;
        if(play) {
            interval = setInterval(() => {
                setTimerCount(time => time + 1);
            }, 1000);
            setTimer(interval);
        }
        else {
            setTimerCount(0);
        }

        return () => {
            if(timer) {
                clearInterval(timer);
                setTimerCount(0);
            }
        }
    }, [play]);
    
    return timerCount;
}