import React, { useRef, useState } from "react" 
import ResultModal from "./ResultModal";

export interface TimerChallengeProps {
  title: string,
  targetTime: number
} 

export default function TimerChallenge({ title, targetTime } : TimerChallengeProps) {
  const timer = useRef<NodeJS.Timeout>();
  const dialog = useRef<HTMLDialogElement>(null);

  const [timeStarted, setTimeStarted] = useState<boolean>(false);
  const [timeExpired, setTimeExpired] = useState<boolean>(false);
  
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current?.showModal();
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return <>
  <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>
  <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
      {targetTime} seconds
    </p>
    <p>
      <button onClick={timeStarted ? handleStop : handleStart}>
        {timeStarted ? 'Stop' : 'Start'} challenge
      </button>
    </p>
    <p className={timeStarted ? 'active' : undefined}>
      {timeStarted ? 'Time is running' : 'Timer inactive'} 
    </p>
  </section>
  </>
}