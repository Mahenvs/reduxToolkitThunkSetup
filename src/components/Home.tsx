import { useEffect } from "react";
import SendMessage from "./SendMessage";
import ShowMessages from "./ShowMessages";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/chatSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getProducts(1));
  }, []);
  return (
    <div>
      <SendMessage />
      <div
        style={{
          display: "flex",
          alignContent: "space-between",
          // padding: "0.2rem",
          padding: "0.5rem",
        }}
      >
        <ShowMessages />
        <div style={{ width: "50%", marginLeft: "0.5rem" }}>
          <h2>Posts are</h2>
          {posts && <span style={{ textAlign: "left" }}>{posts?.title}</span>}
        </div>
      </div>
    </div>
  );
};

export default Home;
