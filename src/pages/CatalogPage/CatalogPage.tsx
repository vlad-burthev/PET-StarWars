import { useState, type FC } from "react";
import { useFetchDataByEndpointQuery } from "../../services/swapiApi";
import { useLocation } from "react-router-dom";
import CatalogList from "../../components/blocks/CatalogList";
import CatalogListSlceleton from "../../components/skeletons/CatalogListSlceleton";

//styles
import styles from "./catalogPage.module.scss";
import Pagination from "../../components/blocks/Pagination";
import { Helmet } from "react-helmet-async";

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = () => {
  const { pathname } = useLocation();

  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isFetching } = useFetchDataByEndpointQuery({
    endpoint: pathname,
    page,
  });

  return (
    <>
      <Helmet>
        <title>Star Wars: {pathname}</title>
      </Helmet>

      <div>
        {isLoading || isFetching ? (
          <div className={styles["skeleton-wrapper"]}>
            <CatalogListSlceleton
              display={isLoading || isFetching ? "block" : "none"}
            />
          </div>
        ) : (
          <>
            <CatalogList data={data?.results} />

            {data?.count > 10 && (
              <Pagination
                setPage={setPage}
                currentPage={page}
                totalPages={Math.ceil(data?.count / 10)}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CatalogPage;
