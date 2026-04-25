import "./filter.scss";

const defaultCity = "Downtown San Diego";

function Filter({ filters, options, onChange, onClear }) {
  return (
    <div className="filter">
      <h1>Filter Downtown San Diego Properties</h1>
      <p>Use the dropdown filters to narrow the full property grid.</p>

      <div className="item">
        <label htmlFor="name">Property Name</label>
        <select id="name" name="name" value={filters.name} onChange={onChange}>
          <option value="">All properties</option>
          {options.names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="item">
        <label htmlFor="city">Neighborhood</label>
        <select id="city" name="city" value={filters.city} onChange={onChange}>
          <option value="">All neighborhoods</option>
          {options.cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="item">
        <label htmlFor="type">Property Type</label>
        <select id="type" name="type" value={filters.type} onChange={onChange}>
          <option value="">All types</option>
          {options.types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <button type="button" className="clearButton" onClick={onClear}>
        Clear filters
      </button>
    </div>
  );
}

export default Filter;
