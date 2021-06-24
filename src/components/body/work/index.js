import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "./work-card";
import "./work.css";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <label>Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
