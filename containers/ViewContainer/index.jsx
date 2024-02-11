import React from "react";

export default function ViewContainer({ params, data }) {
  let strData = JSON.stringify(data);
  return (
    <div>
      params : {params} , str : {strData}
    </div>
  );
}
