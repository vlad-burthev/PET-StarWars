//deps
import { useState, type FC } from "react";
import { Link, NavLink } from "react-router-dom";
//styles
import styles from "./leftbar.module.scss";
//paths
import { paths } from "../../routes/paths";
//icons
import LogoIcon from "./icons/logo.svg?react";

const Leftbar: FC = () => {
  const [toggleBar, setToggleBar] = useState(true);
  return (
    <>
      <button
        onClick={() => setToggleBar((prev) => !prev)}
        className={`${styles["btn__toggle"]} ${toggleBar ? styles.close : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <aside className={`${styles.leftbar} leftbar`}>
        <div className={`${styles.content} ${toggleBar ? styles.show : ""}`}>
          <div className={styles.logo}>
            <Link to={"/"}>
              <span>StarWars</span>
              <LogoIcon />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to={"/"}
                >
                  home
                </NavLink>
              </li>
              {Object.values(paths).map((route: any) => (
                <li key={route}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    to={route}
                  >
                    {route}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Leftbar;
