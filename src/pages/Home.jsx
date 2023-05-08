import React from 'react'
import HomeCard from '../components/HomeCard'
import Sidebar from '../components/Sidebar'
import { BarElement } from "chart.js"

const Home = () => {
  let bar = new BarElement()
  console.log(bar);
  return (
    <div className='d-flex'>
      <Sidebar/>
      <main className='homeMainSide'>
        <div className="homeCardsWrapper p-5 w-100">
          <HomeCard title="Jami o'quvchilar soni:" number="255"/>
          <HomeCard title="O'qituvchilar soni:" number="13"/>
          <HomeCard title="Shu oy tark etganlar:" number="31"/>
          <HomeCard title="Jami guruhlar soni:" number="26"/>
        </div>
      </main>
    </div>
  )
}

export default Home