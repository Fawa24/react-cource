import React, { useState } from "react"

export interface TimerChallengeProps {
  title: string,
  targetTime: number
} 

export default function TimerChallenge({ title, targetTime } : TimerChallengeProps) {
  const [timeStarted, setTimeStarted] = useState<boolean>(false);
  const [timeExpired, setTimeExpired] = useState<boolean>(false);
  
  function handleStart() {
    setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    
  }

  return <section className="challenge">
    <h2>{title}</h2>
    {timeExpired && <p>You lost!</p>}
    <p className="challenge-time">
      {targetTime} seconds
    </p>
    <p>
      <button onClick={handleStart}>
        {timeStarted ? 'Stop' : 'Start'} challenge
      </button>
    </p>
    <p className={timeStarted ? 'active' : undefined}>
      {timeStarted ? 'Time is running' : 'Timer inactive'} 
    </p>
  </section>
}