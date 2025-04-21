import { WaitingRoom } from './Components/WaitingRoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

function App() {
  async function joinChat(userName: string, chatRoom: string) {
    const connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5083/chat")
    .configureLogging(LogLevel.Debug)
    .build();

    try {
      await connection.start();
      await connection.invoke("JoinChat", { userName, chatRoom });
      console.log(connection);
    }
    catch {
      console.log("Error");
    }
  } 

  return (
    <>
      <WaitingRoom joinChat={joinChat} />
    </>
  )
}

export default App
