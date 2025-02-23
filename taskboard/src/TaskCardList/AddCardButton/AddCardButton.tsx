import { Card } from "react-bootstrap";
import "./AddCardButton.css";

export default function AddCardButton() {
  return <Card className="task-card-list-component add-card-button">
    <i className="bi bi-plus fs-5"></i>
    <p className="m-0">Add new card</p>
  </Card>
}