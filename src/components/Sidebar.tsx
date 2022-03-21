import React from "react";

function Sidebar() {
  return (
    <div className="sidebar bg-red-600 col-span-1 row-span-6">
      <h2 className=" font-mono text-white font-bold border-2 p-1 m-1 text-center">
        Awesome.red
      </h2>
      <input
        type="text"
        placeholder="search"
        className=" h-8 m-3 p-1 rounded-md"
      />
      <div className="sidebar-item">
        <h3 className="text-white">Sort by</h3>
        <ul>
          <li className=" ml-2 text-white">
            <a href="#">Popular</a>
          </li>
          <li className=" ml-2 text-white">
            <a href="#">Hot</a>
          </li>
          <li className=" ml-2 text-white">
            <a href="#">New</a>
          </li>
          <li className=" ml-2 text-white">
            <a href="#">Rising</a>
          </li>
          <li className=" ml-2 text-white">
            <a href="#">Controversial</a>
          </li>
          <li className=" ml-2 text-white">
            <a href="#">Top</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
