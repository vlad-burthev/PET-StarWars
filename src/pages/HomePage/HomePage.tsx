import type { FC } from "react";

import styles from "./homePage.module.scss";
import { Helmet } from "react-helmet-async";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <Helmet>
        <title>Star Wars: Home page</title>
      </Helmet>
      <section>
        <div>
          <p>
            This website was inspired by the exciting Star Wars universe, where
            every character, planet and event represents a unique element of
            this epic saga. My project aims to develop the richness and
            diversity of this galaxy by providing information about the
            characters, planets, ships and other elements of this fantasy world.
            I hope Star Wars fans will learn some interesting facts here and
            enjoy being immersed in this exciting space epic.{" "}
            <b>"May the Force be with you!"</b>
          </p>
        </div>

        <div className={styles.info}>
          <h2>To get the information I used:</h2>
          <ul>
            <li>
              <a href="https://swapi.dev/">SWAPI</a>
            </li>
            <li>
              <a href="https://starwars-visualguide.com/#/">
                Star Wars A Visual Guide
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2>To develop this website I used:</h2>
          <div id="console" className={styles.console}>
            <div className={styles["console-header"]}>
              <span className={styles["console-circle"]}></span>
              <span className={styles["console-circle"]}></span>
              <span className={styles["console-circle"]}></span>
            </div>
            <div className={styles["console-content"]}>
              {"{"}
              <br />
              "dependencies": {"{"}
              <br />
              "@reduxjs/toolkit": "^2.1.0", "path": "^0.12.7", "react":
              "^18.2.0", "react-content-loader": "^6.2.1", "react-dom":
              "^18.2.0", "react-helmet-async": "^2.0.4", "react-redux":
              "^9.1.0", "react-router-dom": "^6.21.3"
              <br />
              {"}"},<br /> "devDependencies": {"{"}
              <br />
              "@types/react": "^18.2.43", "@types/react-dom": "^18.2.17",
              "@typescript-eslint/eslint-plugin": "^6.14.0",
              "@typescript-eslint/parser": "^6.14.0", "@vitejs/plugin-react":
              "^4.2.1", "eslint": "^8.55.0", "eslint-plugin-react-hooks":
              "^4.6.0", "eslint-plugin-react-refresh": "^0.4.5", "sass":
              "^1.70.0", "typescript": "^5.2.2", "vite": "^5.0.8",
              "vite-plugin-svgr": "^4.2.0"
              <br /> {"}"}
              <br />
              {"}"}
            </div>
          </div>
        </div>

        <a
          style={{ marginTop: 0, display: "block", color: "yellow" }}
          href="https://github.com/vlad-burthev"
        >
          GitHub Link - https://github.com/vlad-burthev
        </a>
      </section>
    </>
  );
};

export default HomePage;
