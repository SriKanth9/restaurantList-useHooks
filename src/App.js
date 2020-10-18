import React, { useEffect, useState } from "react";
import "./styles.css";

import Restaurants from "./Restaurants";
import LoadRest from "./LoadRest";
import SearchRestaurants from "./SearchRestaurant";

export default function App() {
  const [restaurants, setRestaurants] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const setRest = () => {
      setRestaurants(Restaurants);
    };
    setRest();
  }, [restaurants]);

const searchCheck=(e)=>{
    setSearch(e.target.value)
}

console.log(search);
  return (
    <div className="App">
      <h1>Top Restaurants List</h1>
      <div>
        <span>Search: </span> <SearchRestaurants onChange = {searchCheck}/>
      </div>
      <LoadRest eachRest={restaurants} search={search}/>
    </div>
  );
}
