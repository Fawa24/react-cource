import React, { useRef, useState } from "react" 
import ResultModal from "./ResultModal";

export interface TimerChallengeProps {
  title: string,
  targetTime: number
} 

export default function TimerChallenge({ title, targetTime } : TimerChallengeProps) {
  const timer = useRef<NodeJS.Timeout>();
  const dialog = useRef<HTMLDialogElement>(null);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current?.showModal();
  }
  
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return <>
  <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>
  <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
      {targetTime} seconds
    </p>
    <p>
      <button onClick={timerIsActive ? handleStop : handleStart}>
        {timerIsActive ? 'Stop' : 'Start'} challenge
      </button>
    </p>
    <p className={timerIsActive ? 'active' : undefined}>
      {timerIsActive ? 'Time is running' : 'Timer inactive'} 
    </p>
  </section>
  </>
}