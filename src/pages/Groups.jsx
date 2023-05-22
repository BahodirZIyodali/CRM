import React from 'react'
import Sidebar from "../components/Sidebar";
import CardLesson from "../components/CardLesson";
import Navbar from "../components/Navbar";

const Groups = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="sd-right w-100">
        <Navbar title="Guruhlar" />
        <form className="container">
          <h1 className="dv-hedding">Guruh qo'shish</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="label" htmlFor="course">
                  Guruh yo'nalishi:
                </label>
                <select id="course" className="form-select">
                  <option value="0">Ona tili</option>
                  <option value="1">Matematika</option>
                  <option value="2">Ingliz tili</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <labe className="label" l htmlFor="days">
                  Yo'nalish:
                </labe>
                <select id="days" className="form-select">
                  <option value="0">DU-CHOR-JUMA</option>
                  <option value="1">SE-PAY-SHAN</option>
                  <option value="2">Har kuni</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="label" htmlFor="time">
                  Dars vaqti:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="time"
                  placeholder="HH:MM - HH:MM"
                />
              </div>
            </div>
          </div>
          <div className="row mb-5 mt-3">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="teacher" className="label">
                  O'qituvchi ismi:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teacher"
                  placeholder="O'qituvchi"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="teacherTel" className="label">
                  O'qituvchi tel raqami
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teacherTel"
                  placeholder="+998 xx xxx xx xx"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="teacherImg" className="label">
                  O'qituvchi rasmi
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="teacherImg"
                />
              </div>
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary mt-4 w-100">
                Qo'shish
              </button>
            </div>
          </div>
        </form>
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
            <CardLesson courseName="Matematika" />
            <CardLesson courseName="Ingliz tili" />
            <CardLesson courseName="Biologiya" />
            <CardLesson courseName="Kimyo" />
            <CardLesson courseName="Tarix" />
            <CardLesson courseName="Ona tili" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups