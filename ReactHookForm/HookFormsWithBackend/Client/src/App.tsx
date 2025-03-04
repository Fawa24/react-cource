import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const style = { display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' };

interface Card {
  name: string;
  description: string;
}

function App() {
  const { register, handleSubmit } = useForm<Card>();

  function onSubmitClick(card: Card) {
    
  }

  return (
    <div style={style}>
      <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '18rem' }}>
        <Form.Group className="mb-3">
          <Form.Label>Card name</Form.Label>
          <Form.Control type="text" placeholder="New Card" {...register('name')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Card description</Form.Label>
          <Form.Control type="text" placeholder="Card description" {...register('description')} />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit(onSubmitClick)}>Submit</Button>
      </Form>
    </div>
  )
}

export default App
