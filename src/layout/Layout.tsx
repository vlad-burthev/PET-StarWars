//deps
import type { FC } from "react";
import { Outlet } from "react-router-dom";

//styles
import "./layout.scss";

//componets
import Leftbar from "./Leftbar";
import Footer from "./Footer";

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <Leftbar />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
