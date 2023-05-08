import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  let location = useLocation()
  
  return (
    <div className="sidebar bg-primary">
        <h2 className='text-center border-bottom py-3'><i className="fa-solid fa-address-book"></i> CRM Panel</h2>
      <ul className="d-flex flex-column gap-2">
        <Link to="/" className={location.pathname === "/" ? "p-2 link clickedLink" : "p-2 link"}>
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-home"></i> Xisobot
          </li>
        </Link>
        <Link to="/students" className={location.pathname === "/students" ? "p-2 link clickedLink" : "p-2 link"}>
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-graduation-cap"></i> O'quvchilar
          </li>
        </Link>
        <Link to="/groups" className={location.pathname === "/groups" ? "p-2 link clickedLink" : "p-2 link"}>
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-user-group"></i> Guruhlar
          </li>
        </Link>
        <Link to="/attendance" className={location.pathname === "/attendance" ? "p-2 link clickedLink" : "p-2 link"}>
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-table-list"></i> Davomat
          </li>
        </Link>
        <Link to="/payment" className={location.pathname === "/payment" ? "p-2 link clickedLink" : "p-2 link"}>
          <li className="d-flex align-items-center gap-3 text-white fs-5">
            <i className="fa-solid fa-credit-card"></i> To'lovlar
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar
