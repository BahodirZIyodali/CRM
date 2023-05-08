import React from 'react'
import HomeCard from '../components/HomeCard'
import Sidebar from '../components/Sidebar'
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';
import Navbar from '../components/Navbar';

const Home = () => {

  // Bar Chart
  const labels = ["January", "February", "March", "April", "May"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Jami o'quvchilar",
        backgroundColor: "rgb(50, 153, 249)",
        borderColor: "rgb(255, 99, 132)",
        data: [170, 200, 185, 240, 280, 300],
      },
      {
        label: "Tark etganlar",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [25, 20, 12, 25, 40, 48],
      },
    ],
  };
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="homeMainSide">
        <Navbar title="Xisobot"/>
        <div className="homeCardsWrapper p-5">
          <HomeCard title="Jami o'quvchilar soni:" number="255" />
          <HomeCard title="O'qituvchilar soni:" number="13" />
          <HomeCard title="Shu oy tark etganlar:" number="31" />
          <HomeCard title="Jami guruhlar soni:" number="26" />
        </div>
        <div>
          <h2 className='text-center'>Aprel oyi bo'yicha statistika</h2>
          <Bar data={data} />
        </div>
      </main>
    </div>
  );
}

export default Home