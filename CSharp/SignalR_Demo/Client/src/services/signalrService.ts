import * as signalR from "@microsoft/signalr";

const hubConnection = new signalR.HubConnectionBuilder()
  .withUrl('https://localhost:7253//chathub')
  .withAutomaticReconnect()
  .build();

hubConnection.start()
  .then(() => console.log('Connected to signalR'))
  .catch(err => console.log('Error occured: ', err));

export default hubConnection;