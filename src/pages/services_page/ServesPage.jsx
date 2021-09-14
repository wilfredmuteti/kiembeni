import React from 'react'
import './servesPage.scss'
import Services from '../../components/servicesc/Services'
import  Letter  from "../../components/newsLetter/Letter"
import Subscriptions from "../../components/subscriptions/Subscription"
import NavBar from "../../components/navbar/Navbar";
export default function ServesPage () {
    return (
        <div className="serves">
            <Services/>
            <div className="letterContainer">
            <Letter/>
            </div>
            <Subscriptions/>
            
        </div>
    )
}
