import { Route, Routes } from "react-router-dom";
import Faq from "./routes/Faq";
import Home from "./components/Home/Home";
import Price from "./routes/Price";
import Contact from "./routes/Contact"

function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/pricing" element={<Price/>}/>
     <Route path="/faq" element={<Faq/>} />
     <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;
