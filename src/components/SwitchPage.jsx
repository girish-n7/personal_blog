import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

export default function SwitchPage() {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
