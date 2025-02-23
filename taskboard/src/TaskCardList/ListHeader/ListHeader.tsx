import { ListHeaderProps } from "./ListHeaderProps";
import "./ListHeader.css";

export default function ListHeader({ name, count }: ListHeaderProps) {
  return <div>
    <hr className="mb-1 mt-0" />
      <div className="card-list-header-content">
        <p>{name}</p>
        <p>{count}</p>
      </div>
    <hr className="mt-1 mb-0" />
  </div>
}