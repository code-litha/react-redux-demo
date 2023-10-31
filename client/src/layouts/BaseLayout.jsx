import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function BaseLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default BaseLayout;
