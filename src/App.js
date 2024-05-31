import "./App.css";
import All from "./components/All.jsx";
import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";
function App() {
  return (
    <div className="bg-[#DCFCE7] min-h-screen max-w-[394px] mx-auto ">
      <Navbar />
      <All />
      <Footer />
    </div>
  );
}

export default App;
