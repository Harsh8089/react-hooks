import { useState } from "react";
import { useStopWatch } from "../custom-hooks/useStopWatch";

const StopWatch = () => {
    const [play, setPlay] = useState<boolean>(false);
    const timerCount = useStopWatch(play);

  return (
    <div>
        {timerCount}
        <div>
            <button onClick={() => setPlay(true)}>Play</button>
            <button onClick={() => {}}>Pause</button>
            <button onClick={() => setPlay(false)}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch