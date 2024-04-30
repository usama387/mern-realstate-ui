/* eslint-disable react/no-unknown-property */
import Filter from "../../components/Filter/Filter";
import { listData } from "../../lib/data";
import Card from "../../components/Card/Card";
import "./ListPage.scss";
import Map from "../../components/map/Map";

const ListPage = () => {
  // dummy data in data.js file to map here
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          {/* filters component */}
          <Filter />

          {/* Item is the detail of residencies which passed as prop to card to show residence details */}
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        {/* Data is being passed as prop to share locations to map */}
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
