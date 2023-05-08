import React from 'react'

const Navbar = (props) => {
  return (
    <div className="position-sticky top-0 d-flex align-items-center justify-content-around bg-light py-2">
      <span className="fs-2 fw-bold text-primary">{props.title}</span>
      <span className="fs-5 text-primary">
        {new Date().getDate()}.{new Date().getMonth() + 1}.
        {new Date().getFullYear()}
      </span>
      <span className="fs-4">
        <i className="fa-solid fa-sun text-secondary bg-white p-2 rounded-circle"></i>
        <i className="fa-solid fa-bell text-secondary bg-white p-2 rounded-circle ms-3 position-relative">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize:10}}>
            99+
          </span>
        </i>
      </span>
    </div>
  );
}

export default Navbar