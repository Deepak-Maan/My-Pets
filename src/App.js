import "./App.css";
import All from "./components/All.jsx";
import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";
function App() {
  return (
    <div className=" h-screen w-full relative max-w-[394px] mx-auto overflow-hidden">
      <div className="bg-[#DCFCE7] max-w-[394px]  h-full mx-auto ">
        <Navbar />
        <All />
        <div className="bg-[#F0FDF4] absolute bottom-0 max-w-[394px] left-0 right-0 mx-auto">
          <Footer className="fixed" />
        </div>
      </div>
    </div>
  );
}

export default App;
