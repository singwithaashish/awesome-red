import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comments from "./Comments";
// import data from "../../../data.json";

function CommentThread({data} : any) {
  
  return data ? (
    <div>
      {data[1]["data"]["children"].map((d : any, i : number) => {
        return d.kind === "t1" ? (
          <Comments
            key={i}
            username={d["data"]["author"]}
            comment={d["data"]}
            time={d["data"]["created"]}
          />
        ) : (
          <h1 key={i}>More</h1>
        );
      })}
     
    </div>
  ) : <h1>loading</h1>;
}

export default CommentThread;
