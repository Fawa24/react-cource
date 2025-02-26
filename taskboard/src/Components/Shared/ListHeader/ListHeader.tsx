import { ListHeaderProps } from "./ListHeaderProps";
import "./ListHeader.css";

export default function ListHeader({ children }: ListHeaderProps) {
  return <div className="task-list-header task-card-list-component">
    <hr className="mb-1 mt-0" />
      <div className="card-list-header-content">
        {children}
      </div>
    <hr className="mt-1 mb-0" />
  </div>
}