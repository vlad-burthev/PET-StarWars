import { useState, type FC } from "react";
import { useGetImageUrl } from "../../../utils/hooks/useGetImageUrl";

//styles
import styles from "./catalogListItem.module.scss";
import { Link } from "react-router-dom";
import ItemImageSkeleton from "../../skeletons/CatalogListItemImageSkeleton";

interface CatalogListItemProps {
  name: string;
  url: string;
}

const CatalogListItem: FC<CatalogListItemProps> = ({ name, url }) => {
  const { id, imgUrl } = useGetImageUrl(url);
  const [errorImg, setErrorImg] = useState<boolean>(false);
  const [loadingImg, setLoadingImg] = useState<boolean>(true);

  const handleImageError = (state: boolean) => {
    setErrorImg(state);
  };

  const handleImageLoading = (state: boolean) => {
    setLoadingImg(state);
  };

  return (
    <Link to={id} className={styles.card}>
      {!errorImg ? (
        <>
          <div
            style={{
              display: loadingImg ? "none" : "block",
              // backgroundImage: `url(${imgUrl})`,
            }}
            className={styles.image}
          >
            <img
              onError={() => handleImageError(true)}
              onLoad={() => handleImageLoading(false)}
              src={imgUrl}
              alt={`${name} image`}
            />
          </div>
          <ItemImageSkeleton display={loadingImg ? "block" : "none"} />
        </>
      ) : (
        <div className={styles["image-error"]}>
          oops, looks like the image has been removed from the Jedi Order
        </div>
      )}
      <div className={styles.name}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default CatalogListItem;
