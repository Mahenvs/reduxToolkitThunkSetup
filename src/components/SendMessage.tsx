import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../store/chatSlice";

const SendMessage = () => {
  const [message, updateMessage] = useState("");
  const dispatch = useDispatch();

  function sendMessageHandler(): void {
    dispatch(setMessage(message));
  }

  return (
    <div>
      <input
        type="text"
        style={{
          padding: "0.4rem",
          borderRadius: "0.3rem",
          width: "20rem",
          height: "2rem",
        }}
        value={message}
        onChange={(e) => {
          updateMessage(e.target.value);
        }}
        placeholder="Type something"
      />
      <button onClick={sendMessageHandler}>Send</button>
    </div>
  );
};

export default SendMessage;
