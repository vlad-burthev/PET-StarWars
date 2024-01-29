import type { FC } from "react";

//styles
import styles from "./catalogList.module.scss";
//types
import { T_CatalogData } from "../../../types";
import CatalogListItem from "../CatalogListItem";

interface CatalogListProps {
  data: T_CatalogData;
}

const CatalogList: FC<CatalogListProps> = ({ data }) => {
  return (
    <div className={styles.list}>
      {data &&
        data.map((item: any) => (
          <CatalogListItem key={item.url} url={item.url} name={item.name} />
        ))}
    </div>
  );
};

export default CatalogList;
