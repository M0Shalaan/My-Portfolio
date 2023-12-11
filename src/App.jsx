import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "My-Portfolio";
  },[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
