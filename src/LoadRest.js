import React from "react";
import DisplayRest from "./DisplayRest";

const LoadRest = (props) => {
  const eachRest = props.eachRest ? props.eachRest : [];
  const searchText = props.search ? props.search : "";

  const filterResult = eachRest.filter((item, index) => {
    return item.Brand.split(" ")[0].toLowerCase().includes(searchText);
  });

  console.log(searchText.length);
  return (
    <ul>
      {searchText.length < 1
        ? eachRest.map((item, index) => (
            <DisplayRest key={index + 1} eachRest={item} />
          ))
        : filterResult.map((item, index) => (
            <DisplayRest key={index + 1} eachRest={item} />
          ))}
    </ul>
  );
};

export default LoadRest;
