import { FormEvent, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

interface WaitingRoomProps {
  joinChat: (userName: string, chatRoom: string) => Promise<void>
}

export function WaitingRoom({ joinChat } : WaitingRoomProps) {
  const [userName, setUserName] = useState<string>('');
  const [chatRoom, setChatRoom] = useState<string>('');

  async function onSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log('calling joinChat');
    await joinChat(userName, chatRoom);
  }

  return <Form className="d-flex flex-column">
    <FormGroup className="mb-3">
      <FormLabel>User name</FormLabel>
      <FormControl type='text'onChange={(e) => setUserName(e.target.value)} />
    </FormGroup>
    <FormGroup className="mb-3">
      <FormLabel>Group name</FormLabel>
      <FormControl type='text' onChange={(e) => setChatRoom(e.target.value)} />
    </FormGroup>
    <Button 
      variant="primary"
      className="align-self-end"
      onClick={async (e) => await onSubmit(e)}>Submit</Button>
  </Form>
}