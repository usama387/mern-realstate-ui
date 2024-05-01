/* eslint-disable no-undef */
import "./List.scss";
import { listData } from "../../lib/data";
import Card from "../Card/Card";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
