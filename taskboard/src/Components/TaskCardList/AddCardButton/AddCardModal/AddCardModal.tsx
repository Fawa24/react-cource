import { Button, Form, Modal } from "react-bootstrap";
import { FormState, UseFormRegister } from "react-hook-form";
import '../../../../App.css';

export interface AddCardModalProps {
  isModalShown: boolean;
  hideModal: () => void;
  saveCard: () => void;
  register: UseFormRegister<AddCardModalFormFieldValues>;
  formState: FormState<AddCardModalFormFieldValues>;
}

export interface AddCardModalFormFieldValues {
  name: string;
  description: string;
}

export default function AddCardModal({isModalShown, hideModal, saveCard, register, formState }: AddCardModalProps) {
  const nameErrorMessage = formState.errors['name']?.message;
  const descriptionErrorMessage = formState.errors['description']?.message;

  return <Modal show={isModalShown} centered>
  <Modal.Header>
    <h5>Add new card</h5>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Card name</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Card"
          {...register("name", {
            required: 'This field is required',
          })}
          isInvalid={!!nameErrorMessage}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Card description</Form.Label>
        <Form.Control as="textarea" 
          rows={3} 
          placeholder="Description" 
          {...register("description", {
            required: 'This field is required',
          })} 
          isInvalid={!!descriptionErrorMessage}/>
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" type="submit" onClick={saveCard}>Save</Button>
    <Button variant="secondary" onClick={hideModal}>Close</Button>
  </Modal.Footer>
</Modal>
}