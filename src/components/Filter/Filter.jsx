import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">location</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City Location"
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {/* Second */}
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        {/* Third */}
        <div className="item">
          <label htmlFor="minPrice">Minimum Price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="any"
          />
        </div>

        {/* Fourth */}
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="text" name="City" id="city" placeholder="any" />
        </div>

        {/* Fifth */}
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" name="bedroom" id="bedroom" placeholder="any" />
        </div>
        <button>
          <img src="/search.png" alt="search-png" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
