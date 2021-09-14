import "./mail.css";
import Navbar from "../../components/navbar/Navbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export default function Mail() {
  
  return (
    <div className="mail">
    <div className="chatMenu">
      <div className="chatMenuWrapper">
        <input placeholder="Search for Acquaintance" className="chatMenuInput" />
      
      </div>
    </div>
    <div className="chatBox">
      <div className="chatBoxWrapper">
      <div className="chatBoxTop">
            
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
                
              ></textarea>
              <button className="chatSubmitButton">
                Send
              </button>
            </div>
            <span className="noConversationText">
            Open a conversation to start a chat.
          </span>
       
      </div>
    </div>
    <div className="chatOnline">
      <div className="chatOnlineWrapper">
        <ChatOnline
          
        />
      </div>
    </div>
  </div>
  );
}