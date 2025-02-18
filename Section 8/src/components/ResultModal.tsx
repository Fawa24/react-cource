import React, { LegacyRef, RefObject, forwardRef } from "react"

export interface ResultModalProps {
  result: string;
  targetTime: number;
}

const ResultModal = forwardRef (function ResultModal({ result, targetTime}: ResultModalProps, ref: LegacyRef<HTMLDialogElement>) {
  return (
  <dialog ref={ref} className="result-modal">
    <h2>You {result}</h2>

    <p>The target time was <strong>{targetTime} seconds.</strong></p>
    <p>You stopped the timer with <strong>X seconds left.</strong></p>

    <form method="dialog">
      <button>CLose</button>
    </form>
  </dialog>
)});

export default ResultModal;