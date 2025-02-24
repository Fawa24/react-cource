import { TaskCardProps } from "./TaskCardProps";
import { Card } from "react-bootstrap";

export default function TaskCard({ name, description} : TaskCardProps) {
  return <Card>
    <Card.Header>{name}</Card.Header>
    <Card.Body>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
}