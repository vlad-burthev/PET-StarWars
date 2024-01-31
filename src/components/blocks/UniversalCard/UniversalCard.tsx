import { useState, type FC } from "react";
import { useGetImageUrl } from "../../../utils/hooks/useGetImageUrl";
import { useFetchSingleDataByIdQuery } from "../../../services/swapiApi";
import { Link } from "react-router-dom";

//styles
import styles from "./universalCard.module.scss";
import ItemImageSkeleton from "../../skeletons/CatalogListItemImageSkeleton";
import UniversalCardSkeleton from "../../skeletons/UniversalCardSkeleton";

interface UniversalCardProps {
  url: string;
}

const UniversalCard: FC<UniversalCardProps> = ({ url }) => {
  const { id, endpoint, imgUrl } = useGetImageUrl(url);
  const { data, isLoading } = useFetchSingleDataByIdQuery({
    endpoint,
    id,
  });

  const [errorImg, setErrorImg] = useState<boolean>(false);
  const [loadingImg, setLoadingImg] = useState<boolean>(true);

  const handleImageError = (state: boolean) => {
    setErrorImg(state);
  };

  const handleImageLoading = (state: boolean) => {
    setLoadingImg(state);
  };

  return (
    <>
      {isLoading ? (
        <UniversalCardSkeleton />
      ) : (
        <Link className={styles.homeworld} to={`/${endpoint}/${id}`}>
          {!errorImg ? (
            <>
              <div
                style={{ display: loadingImg ? "none" : "block" }}
                className={styles.image}
              >
                <img
                  onError={() => handleImageError(true)}
                  onLoad={() => handleImageLoading(false)}
                  src={imgUrl}
                  alt={data.name || data.title + " image"}
                />
              </div>
              <ItemImageSkeleton display={loadingImg ? "block" : "none"} />
            </>
          ) : (
            <div className={styles["image-error"]}>
              oops, looks like the image has been removed from the Jedi Order
            </div>
          )}
          <div className={styles.title}>{data.name || data.title}</div>
        </Link>
      )}
    </>
  );
};

export default UniversalCard;
