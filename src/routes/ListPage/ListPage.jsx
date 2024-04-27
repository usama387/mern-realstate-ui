import Filter from "../../components/Filter/Filter";
import { listData } from "../../lib/data";
import Card from "../../components/Card/Card";
import "./ListPage.scss";

const ListPage = () => {
  // dummy data in data.js file to map here
  const data = listData;

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter />

        {/* Item is the detail of residencies which passed as prop to card to show details */}
        {data.map((item)=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">Map</div>
  </div>;
};

export default ListPage;
