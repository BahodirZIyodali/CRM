import React from 'react'

const CardLesson = () => {
  return (
    <div className="dv-card mb-4">
      <div className="p-2 text-center text-light dv-card-header">
        <h3>Matematika</h3>
      </div>
      <div className=" pt-2  ps-3 pe-3 pb-5 ">
        <div className="d-flex pb-4  justify-content-between align-items-center">
          <img style={{objectFit:"cover"}} src="/user.jpg" alt="user img" />
          <div>
            <div className="d-flex justify-content-between">
              <h5 className="m-0 fs-5 fw-bold card-p">O'qituvchi:</h5>
              <span>
                <p className="m-0 text-end fs-6 fw-semibold">Maxkamova</p>
                <p className="m-0 text-end fs-6 fw-semibold">Ziyoda</p>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0 fs-5 fw-bold card-p">Tell raqam:</h5>
              <p className="m-0 text-end fs-6 fw-semibold">+998997821720</p>
            </div>
          </div>
        </div>
        <div className="d-flex pb-3  justify-content-between">
          <h5 className="m-0 fs-5 fw-bold card-p">Dars kunlari:</h5>
          <p className="m-0 text-end fs-6 fw-semibold">DU-CHOR-JUM </p>
        </div>
        <div className="d-flex pb-3  justify-content-between">
          <h5 className="m-0 fs-5 fw-bold card-p">Dars vaqti:</h5>
          <p className="m-0 text-end fs-6 fw-semibold">14:00-16:00</p>
        </div>
        <div className="d-flex pb-3  justify-content-between">
          <h5 className="m-0 fs-5 fw-bold card-p">O'quvchilar soni:</h5>
          <p className="m-0 text-end fs-6 fw-semibold">25 ta</p>
        </div>
        <div className="d-flex pb-3  justify-content-between">
          <h5 className="m-0 fs-5 fw-bold card-p">To'lov qilganlar:</h5>
          <p className="m-0 text-end fs-6 fw-semibold">10 ta</p>
        </div>
      </div>
    </div>
  );
}

export default CardLesson
