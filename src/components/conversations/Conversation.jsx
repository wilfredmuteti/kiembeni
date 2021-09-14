import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation( ) {
  

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <span className="conversationName">Wilfred Muteti</span>
    </div>
  );
}