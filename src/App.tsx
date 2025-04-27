import "./App.css";
import Home from "./components/Home";
import { appStore } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Home />
    </Provider>
  );
}

export default App;
