import { useState, type FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetchSingleDataByIdQuery } from "../../services/swapiApi";
import { useGetImageUrl } from "../../utils/hooks/useGetImageUrl";
import { useConvertedData } from "../../utils/hooks/useConvertedData";
import styles from "./singlePage.module.scss";
import UniversalCard from "../../components/blocks/UniversalCard";
import { Helmet } from "react-helmet-async";

interface SinglePageProps {}

const SinglePage: FC<SinglePageProps> = () => {
  const { pathname } = useLocation();
  const { id, endpoint, imgUrl } = useGetImageUrl(pathname);
  const { data, isLoading } = useFetchSingleDataByIdQuery({ id, endpoint });
  const [convertedData, setConvertedData] = useState({});
  useEffect(() => {
    if (data !== undefined) {
      const convertedData = useConvertedData(data);
      setConvertedData(convertedData);
    }
  }, [data]);

  console.log(data);

  return (
    <>
      <Helmet>
        <title>Star Wars: {data?.title || data?.name}</title>
      </Helmet>
      <section className={styles.page}>
        {isLoading ? (
          "loading"
        ) : (
          <>
            <div className={styles.content}>
              <div className={styles.characters}>
                <div className={styles["personal-info"]}>
                  <div className={styles.avatar}>
                    <img
                      src={imgUrl}
                      alt={`${data.title || data.name} image`}
                    />
                  </div>
                  <div>
                    <h1>{data.title || data.name}</h1>
                    <ul className={styles["personal-info__list"]}>
                      {convertedData &&
                        Object.entries(convertedData).map(([key, value]) => (
                          <li key={key}>
                            {key}:<span>{value as string}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className={styles["footer-item"]}></div>
                </div>
                {data?.opening_crawl || data?.homeworld ? (
                  data?.opening_crawl ? (
                    <div className={styles.opening}>
                      <h1>Opening crawl</h1>
                      <div className={styles["opening-text"]}>
                        {data?.opening_crawl}
                      </div>
                    </div>
                  ) : (
                    <div className={styles.homeworld}>
                      <h1>Homeworld</h1>
                      {data?.homeworld && (
                        <UniversalCard url={data?.homeworld} />
                      )}
                    </div>
                  )
                ) : (
                  <></>
                )}
              </div>

              {data?.characters && data?.characters.length !== 0 && (
                <div className={styles["additional-info"]}>
                  <h2>Characters</h2>
                  <div className={styles["additional-info-list"]}>
                    {data?.characters.map((url: string) => (
                      <UniversalCard key={url} url={url} />
                    ))}
                  </div>
                </div>
              )}

              {data?.planets && data?.planets.length !== 0 && (
                <div className={styles["additional-info"]}>
                  <h2>Planets</h2>
                  <div className={styles["additional-info-list"]}>
                    {data?.planets.map((url: string) => (
                      <UniversalCard key={url} url={url} />
                    ))}
                  </div>
                </div>
              )}

              {data?.species && data?.species.length !== 0 && (
                <div className={styles["additional-info"]}>
                  <h2>Species</h2>
                  <div className={styles["additional-info-list"]}>
                    {data?.species.map((url: string) => (
                      <UniversalCard key={url} url={url} />
                    ))}
                  </div>
                </div>
              )}

              {data?.starships && data?.starships.length !== 0 && (
                <div className={styles["additional-info"]}>
                  <h2>Starships</h2>
                  <div className={styles["additional-info-list"]}>
                    {data?.starships.map((url: string) => (
                      <UniversalCard key={url} url={url} />
                    ))}
                  </div>
                </div>
              )}

              {data?.films && data?.films.length !== 0 && (
                <div className={styles["additional-info"]}>
                  <h2>Films</h2>
                  <div className={styles["additional-info-list"]}>
                    {data?.films.map((url: string) => (
                      <UniversalCard key={url} url={url} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default SinglePage;
