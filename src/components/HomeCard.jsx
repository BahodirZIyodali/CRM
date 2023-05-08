import React from 'react'

const HomeCard = (props) => {
  return (
    <div className=' border rounded-5 shadow bg-white p-4 d-flex justify-content-between'>
      <div>
          <h3 className='fs-3'>{props.title}</h3>
          <span className='fs-2 fw-bold'>{props.number} ta</span>
      </div>
      <div className='mt-auto'>
        <img src="/iconChart.png" alt="icon" />
      </div>
    </div>
  )
}

export default HomeCard
