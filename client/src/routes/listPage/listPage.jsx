import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useState } from "react";

function extractNeighborhood(address) {
  if (!address) return "";
  return address.split(",")[0].trim();
}

function ListPage() {
  const data = useLoaderData();
  const [filters, setFilters] = useState({ name: "", city: "", type: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({ name: "", city: "", type: "" });
  };

  return (
    <div className="listPage">
      <div className="listHeader">
        <h1>All Downtown San Diego Properties</h1>
        <p>
          Browse every property in a clean 3-column grid, then narrow results by
          name, neighborhood, or property type.
        </p>
      </div>
      <div className="listContainer">
        <div className="filterPane">
          <Suspense fallback={<div className="filterLoading">Loading filters...</div>}>
            <Await
              resolve={data.postResponse}
              errorElement={<div className="filterLoading">Filters unavailable.</div>}
            >
              {(postResponse) => {
                const allProperties = postResponse.data || [];
                const propertyNames = [...new Set(allProperties.map((post) => post.title).filter(Boolean))].sort();
                const cityOptions = [...new Set(allProperties.map((post) => extractNeighborhood(post.address)).filter(Boolean))].sort();
                const typeOptions = [...new Set(allProperties.map((post) => post.property).filter(Boolean))].sort();

                return (
                  <Filter
                    filters={filters}
                    options={{ names: propertyNames, cities: cityOptions, types: typeOptions }}
                    onChange={handleFilterChange}
                    onClear={clearFilters}
                  />
                );
              }}
            </Await>
          </Suspense>
        </div>
        <div className="cardsGrid">
          <Suspense fallback={<p>Loading properties...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>No properties available.</p>}
            >
              {(postResponse) => {
                const allProperties = postResponse.data || [];
                const filteredProperties = allProperties.filter((post) => {
                  const matchesName = filters.name ? post.title === filters.name : true;
                  const matchesCity = filters.city
                    ? extractNeighborhood(post.address) === filters.city
                    : true;
                  const matchesType = filters.type ? post.property === filters.type : true;
                  return matchesName && matchesCity && matchesType;
                });

                return filteredProperties.length ? (
                  filteredProperties.map((post) => <Card key={post.id} item={post} />)
                ) : (
                  <div className="noResults">
                    <h2>No properties match that filter.</h2>
                    <p>Try a different neighborhood, property name, or type.</p>
                  </div>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading map...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Map unavailable.</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
