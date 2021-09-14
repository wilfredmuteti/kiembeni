import './explore.scss'

import React from 'react'
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import NavBar from "../../components/navbar/Navbar";
const Explore = () => {
    return (
        <div className="explore">
        <Featured/>
           <List/>
           <List/>
           <List/>
           <List/> 
        </div>
    )
}

export default Explore
