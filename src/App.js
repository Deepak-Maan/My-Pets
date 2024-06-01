import "./App.css";
import All from "./components/All.jsx";
import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";
function App() {
  return (
    <div className=" min-h-screen">
      <div className="bg-[#DCFCE7] max-w-[394px] mx-auto ">
        <Navbar />
        <All />
      </div>
      <div className="bg-[#F0FDF4] max-w-[394px] mx-auto">
        <Footer className="fixed" />
      </div>
    </div>
  );
}

export default App;
