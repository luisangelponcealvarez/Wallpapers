import React from "react";
import "./Loading.css";

export function Loading() {
  return (
    <div className="loader">
      <span className="loader-text">Loading</span>
      <span className="load"></span>
    </div>
  );
}
