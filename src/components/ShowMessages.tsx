import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShowMessages = () => {
  const { messages } = useSelector(
    (state: { chat: { messages: string[] } }) => state.chat
  );
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setData(messages);
    console.log(messages);
  }, [messages]);

  return (
    <div style={{ marginTop: "1em" }}>
      <h2>Messages received are:</h2>
      <ul>
        {data?.map((message, index) => (
          <li style={{ textAlign: "left" }} key={index}>
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowMessages;
