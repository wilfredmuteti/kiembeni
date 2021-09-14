import "./message.css";
import { format } from "timeago.js";

export default function Message() {
  return (
    <div className="Own">
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">This is a text</p>
      </div>
      <div className="messageBottom">7:00AM</div>
    </div>
  );
}