import { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Work from "./Pages/Work";
import Hobbies from "./Pages/Hobbies";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Homebg } from "./assets/DesignIcons/DesignIcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="max-w-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${Homebg})` }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/About" element={<About />} />
            <Route path="/Work" element={<Work />} />

            <Route path="/Hobbies" element={<Hobbies />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
