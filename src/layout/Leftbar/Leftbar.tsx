//deps
import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";
//styles
import styles from "./leftbar.module.scss";
//paths
import { paths } from "../../routes/paths";
//icons
import LogoIcon from "./icons/logo.svg?react";

const Leftbar: FC = () => {
  return (
    <aside className={`${styles.leftbar} leftbar`}>
      <div className={styles.content}>
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
            {paths.map(({ route }) => (
              <li key={route}>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
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
  );
};

export default Leftbar;
