import "./App.css";
import All from "./components/All.jsx";
import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";
function App() {
  return (
    <div>
      <div className="bg-[#DCFCE7] min-h-screen max-w-[394px] mx-auto overflow-hidden">
        <Navbar />
        <All />
      </div>
      <div className="bg-[#F0FDF4] max-w-[394px] mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
