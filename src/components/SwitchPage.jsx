import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";

export default function SwitchPage() {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="*" element={<Error />}></Route>
    </Routes>
  );
}
