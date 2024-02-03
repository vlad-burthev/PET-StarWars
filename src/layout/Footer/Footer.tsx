import type { FC } from "react";

//styles
import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={`${styles.footer} footer`}>
      Designed And Developed By{" "}
      <a href="https://github.com/vlad-burthev">Vlad Burtsev</a>.
    </div>
  );
};

export default Footer;
