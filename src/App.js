import { useState } from "react";
import Overlay from "./components/Overlay";
import FormCard from "./components/formCard";
import AddUser from "./components/AddUser";
import "./App.css";

function App() {
  const [errMessage, setErrMessage] = useState("");
  const [getData, setData] = useState([]);

  const getOverlayErr = (message) => {
    setErrMessage(message);
  };

  const getUserData = (data) => setData((prevState) => [...prevState, data]);

  const changeOverlayState = () => setErrMessage("");

  return (
    <div>
      {errMessage && <Overlay changeOverlayState={changeOverlayState} message={errMessage} />}
      <FormCard getUserData={getUserData} getOverlayErr={getOverlayErr} />
      <AddUser data={getData} />
    </div>
  );
}

export default App;
