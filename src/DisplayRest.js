import React from "react";

const DisplayRest = (props) => {
  const { eachRest } = props;
  return (
    <>
      <li>
        <h3>{eachRest.Brand}</h3>
        <p>{eachRest.Variety}</p>
        <p>{eachRest.Country}</p>
        <p>{eachRest["Top Ten"]}</p>
      </li>
    </>
  );
};

export default DisplayRest;
