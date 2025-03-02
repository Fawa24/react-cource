import { useId } from "react"

export function LabelInput() {
  const generatedId = useId();
  const inputId = `${generatedId}-input`;

  return <form style={{marginBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <label htmlFor={inputId} style={{marginBottom: '7px', fontSize: '20px'}}>Label for input</label>
    <input id={inputId}></input>
  </form>
}