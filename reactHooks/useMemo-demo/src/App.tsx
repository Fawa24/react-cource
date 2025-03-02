import { useState } from "react"

function createUser(name: string, surname: string) {
  const user = { name, surname };
  console.log(user);
  return user;
}

function App() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);

  const user = createUser(name, surname);
  
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Button was clicked {counter} times</button>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='text' value={surname} onChange={(e) =>setSurname(e.target.value)} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default App
