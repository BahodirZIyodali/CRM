import React from 'react'
import Sidebar from "../components/Sidebar";
import CardLesson from "../components/CardLesson";
import Navbar from "../components/Navbar";

const Davomat = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="sd-right w-100">
        <Navbar title="Davomat"/>
        <div className="davomat pt-4 ps-5 pe-5">
          <div className="d-flex justify-content-between pb-4">
            <h2 className="dv-hedding fw-bold fs-2">
              Davomat olinadigan guruhni tanlang
            </h2>
            <input
              type="search"
              className="form-control rounded-4 dv-search"
              placeholder="Guruh nomini kiriting"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-between">
            <CardLesson />
            <CardLesson />
            <CardLesson />
            <CardLesson />
            <CardLesson />
            <CardLesson />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Davomat