import { Outlet } from "react-router-dom";
import Topbar from "./components/shared/Topbar";

const App = () => {
  return (
    <div className="h-full">
      <Topbar />
      <Outlet />
      <h1>Bottombar</h1>
    </div>
  );
};

export default App;
