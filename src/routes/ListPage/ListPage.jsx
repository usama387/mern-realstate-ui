/* eslint-disable react/no-unknown-property */
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import "./ListPage.scss";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

const ListPage = () => {
  
  const posts = useLoaderData()
  

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          {/* filters component */}
          <Filter />

          {/* Item is the detail of residencies which passed as prop to card to show residence details */}
          {posts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        {/* Data is being passed as prop to share locations to map */}
        <Map items={posts} />
      </div>
    </div>
  );
};

export default ListPage;
