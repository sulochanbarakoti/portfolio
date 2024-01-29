import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <ThreeDots type="Plane" color="#343e47" height={100} width={100} />
    </div>
  );
}

export default Preloader;
