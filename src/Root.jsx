import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;


window.scrollTo(0, 0);