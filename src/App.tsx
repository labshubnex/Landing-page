import { Outlet } from "react-router-dom";
import Topbar from "./components/shared/Topbar";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <div className="h-full font-inter">
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
