import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showGamerOver();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleEnd() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal result="lost" targetTimer={targetTime} ref={dialog} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleEnd : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timmer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
