import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { useFetchSingleDataByIdQuery } from "../../services/swapiApi";
import { useGetImageUrl } from "../../utils/hooks/useGetImageUrl";

//styles
import styles from "./characterSinglePage.module.scss";
import HomePlanet from "../../components/blocks/HomePlanet";

interface CharacterSinglePageProps {}

const CharacterSinglePage: FC<CharacterSinglePageProps> = () => {
  const { pathname } = useLocation();
  const { endpoint, id, imgUrl } = useGetImageUrl(pathname);

  const { data, isLoading } = useFetchSingleDataByIdQuery({
    endpoint,
    id,
  });

  console.log(data);

  return (
    <div className={styles.page}>
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className={styles.content}>
            <div className={styles["personal-info"]}>
              <div className={styles.avatar}>
                <img src={imgUrl} alt={`${data.name} image`} />
              </div>
              <div>
                <h1>{data.name}</h1>
                <ul className={styles["personal-info__list"]}>
                  <li>
                    birth_year: <span>{data.birth_year}</span>
                  </li>
                  <li>
                    eye_color: <span>{data.eye_color}</span>
                  </li>
                  <li>
                    gender: <span>{data.gender}</span>
                  </li>
                  <li>
                    hair_color: <span>{data.hair_color}</span>
                  </li>
                  <li>
                    height: <span>{data.height}</span>
                  </li>
                  <li>
                    mass: <span>{data.mass}</span>
                  </li>
                  <li>
                    skin_color: <span>{data.skin_color}</span>
                  </li>
                </ul>
              </div>
            </div>
            {data?.homeworld && (
              <div className={styles.homeworld}>
                <HomePlanet url={data?.homeworld} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterSinglePage;
