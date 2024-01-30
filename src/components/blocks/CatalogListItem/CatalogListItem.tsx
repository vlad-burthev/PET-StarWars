import type { FC } from "react";
import { useGetImageUrl } from "../../../utils/hooks/useGetImageUrl";

//styles
import styles from "./catalogListItem.module.scss";
import { Link } from "react-router-dom";

interface CatalogListItemProps {
  name: string;
  url: string;
}

const CatalogListItem: FC<CatalogListItemProps> = ({ name, url }) => {
  const { id, imgUrl } = useGetImageUrl(url);

  return (
    <Link to={id} className={styles.card}>
      <div className={styles.image}>
        <img src={imgUrl} alt={`${name} image`} />
      </div>
      <div className={styles.name}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default CatalogListItem;
