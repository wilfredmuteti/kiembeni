import React, { PureComponent } from 'react'
import './subscription.scss'
import cardimage1 from "../../media/smallscale.jpg";
import cardimage2 from "../../media/mediumscale.png";
import cardimage3 from "../../media/largescale.jpg";
export class Subscription extends PureComponent {
    render() {
        return (
            <div className="container">
                
                <h1 className="subscriptiontitle">choose A subscription</h1>
            
            <div className="subscriptionCards">
                
                <div className="cardcontainer">
                    <div className="subscriptioncarditem">
                        <img className="subcardimage" src={cardimage1} alt=""></img>
                        <div className="subcardinfo">
                        <h1 className="subcardTitle">Bronze</h1>
                        <button className="subcardButton">Subscribe</button>
                        </div>
                        
                    </div>
                </div>
                <div className="cardcontainer">
                    <div className="subscriptioncarditem">
                        <img className="subcardimage"src={cardimage2} alt=""></img>
                        <div className="subcardinfo">
                        <h1 className="subcardTitle">Silver</h1>
                        <button className="subcardButton">Subscribe</button>
                        </div>
                        
                    </div>
                </div>
   
                <div className="cardcontainer">
                    <div className="subscriptioncarditem">
                    <img className="subcardimage"src={cardimage3} alt=""></img>
                        <div className="subcardinfo">
                        <h1 className="subcardTitle">Gold</h1>
                        <button className="subcardButton">Subscribe</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Subscription
