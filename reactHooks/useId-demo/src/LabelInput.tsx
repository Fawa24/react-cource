export function LabelInput() {
  return <form style={{marginBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <label htmlFor="input" style={{marginBottom: '7px', fontSize: '20px'}}>Label for input</label>
    <input id="input"></input>
  </form>
}