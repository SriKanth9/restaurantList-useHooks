import React, { useState } from "react";

const SearchRestaurants = (props) => {

  return (
    <>
      <input type="text" onChange={props.onChange} />
    </>
  );
};

export default SearchRestaurants;
