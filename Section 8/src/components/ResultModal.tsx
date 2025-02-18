import React from "react"

export interface ResultModalProps {
  result: string;
  targetTime: number;
}

export default function ResultModal({result, targetTime}: ResultModalProps) {
  return (
  <dialog className="result-modal">
    <h2>You {result}</h2>

    <p>The target time was <strong>{targetTime} seconds.</strong></p>
    <p>You stopped the timer with <strong>X seconds left.</strong></p>

    <form method="dialog">
      <button>CLose</button>
    </form>
  </dialog>
)}