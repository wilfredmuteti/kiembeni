import React from 'react'
import './analytics.scss'
import BarChart from "../../components/bar_chart/Bar";
import Chart from "../../components/chart/Chart";
import {userData} from "../../dummyData";
import Piechart from "../../components/pie_chart/Pie";
import NavBar from "../../components/navbar/Navbar";
const Analytics = () => {
    return (
        <div className="analytics">
           <BarChart />
      <Chart data={userData} title="Farm performance" grid dataKey="Active User"/> 
      <Piechart/>
        </div>
    )
}

export default Analytics
