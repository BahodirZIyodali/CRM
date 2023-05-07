import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar bg-primary">
        <h2 className='text-center border-bottom py-3'><i className="fa-solid fa-address-book"></i> CRM Panel</h2>
      <ul className="d-flex flex-column gap-2">
        <Link to="/" className="p-2">
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-home"></i> Xisobot
          </li>
        </Link>
        <Link to="/students" className="p-2">
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-graduation-cap"></i> O'quvchilar
          </li>
        </Link>
        <Link to="/groups" className="p-2">
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-user-group"></i> Guruhlar
          </li>
        </Link>
        <Link to="/attendance" className="p-2">
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-table-list"></i> Davomat
          </li>
        </Link>
        <Link to="/payment" className="p-2">
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-credit-card"></i> To'lovlar
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar
