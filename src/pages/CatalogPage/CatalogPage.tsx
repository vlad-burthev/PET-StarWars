import type { FC } from "react";
import { useFetchDataByEndpointQuery } from "../../services/swapiApi";
import { useLocation } from "react-router-dom";
import CatalogList from "../../components/blocks/CatalogList";

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = () => {
  const { pathname } = useLocation();
  const { data, isLoading, isFetching } = useFetchDataByEndpointQuery({
    endpoint: pathname,
    page: 1,
  });

  return (
    <div>
      {isLoading || isFetching ? (
        "loading"
      ) : (
        <CatalogList data={data?.results} />
      )}
    </div>
  );
};

export default CatalogPage;
