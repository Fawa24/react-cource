import { Offcanvas, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddListOffcanvas.css';

export interface AddListOffcanvasProps {
  show: boolean;
  onHide: () => void;
}

export interface AddListFormValues {
  name: string;
}

export function AddListOffcanvas({ show, onHide }: AddListOffcanvasProps) {
  const { register } = useForm<AddListFormValues>();

  return (
    <Offcanvas show={show} onHide={onHide} placement="end" scroll={true} backdrop={false} style={{width: '20%'}}>
      <Offcanvas.Body>
        <Form>
          <Form.Group controlId="inputField">
            <Form.Control
              type="text"
              placeholder="List name"
              {...register('name', {
                required: "List name can not be empty"
              })}
            />
          </Form.Group>
          <div className="d-flex justify-content-between mt-3 addlistcanvas-buttons-group">
            <Button variant="primary">Save</Button>
            <Button variant="secondary" onClick={onHide}>Close</Button>
          </div>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
