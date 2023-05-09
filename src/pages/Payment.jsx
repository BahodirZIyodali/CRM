import Table from "../components/Table";
import React from "react";
import CardLesson from "./../components/CardLesson";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar";

const Payment = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="sd-right w-100">
        <Navbar />
        <div className="container">
          <h1 className="dv-hedding">To’lov qilish</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="label" htmlFor="name">
                  O'quvchi ismi:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Ismingizni kiriting"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <labe className="label" l htmlFor="major">
                  Yo'nalish:
                </labe>
                <input
                  type="text"
                  className="form-control"
                  id="major"
                  placeholder="Yo'nalishingizni kiriting"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="label" htmlFor="phone">
                  Telefon raqam:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="+998 xx xxx xx xx"
                />
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="teacher" className="label">
                  O'qituvchi ismi:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teacher"
                  placeholder="O'qituvchingizni kiriting"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="teacher" className="label">
                  To’lov qilayotgan kun
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teacher"
                  placeholder="05.032022"
                />
              </div>
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary mt-4 w-100">
                To'lov qilish
              </button>
            </div>
          </div>  

          <div className="davomat pt-4 ps-5 pe-5">
            <div className="d-flex justify-content-between pb-4">
              <h2 className="dv-hedding fw-bold fs-2">
                To’lov qilganlar (shu oy bo’yicha)
              </h2>
              <input
                type="search"
                className="form-control rounded-4 dv-search"
                placeholder="O’quvchi ismini kiriting"
              />
            </div>
            <div>
              <table className="table table-hover">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>N^</th>
                    <th>O'quvchi ismi</th>
                    <th>Telefon nomer</th>
                    <th>Yo'nalish</th>
                    <th>O’qituvchisi</th>
                    <th>To’lov vaqti</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>+998949813606</td>
                    <td>Frontend</td>
                    <td>O’qituvchi (F.I.SH)</td>
                    <td>06.02.2022</td>
                    <td>
                      <i className="fa-solid fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>+998949813606</td>
                    <td>Matematika</td>
                    <td>O’qituvchi (F.I.SH)</td>
                    <td>06.02.2022</td>
                    <td>
                      <i className="fa-solid fa-trash text-danger"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
