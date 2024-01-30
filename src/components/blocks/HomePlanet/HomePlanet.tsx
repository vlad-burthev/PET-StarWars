import type { FC } from "react";
import { useGetImageUrl } from "../../../utils/hooks/useGetImageUrl";
import { useFetchSingleDataByIdQuery } from "../../../services/swapiApi";
import { Link } from "react-router-dom";

interface HomePlanetProps {
  url: string;
}

const HomePlanet: FC<HomePlanetProps> = ({ url }) => {
  const { id, endpoint, imgUrl } = useGetImageUrl(url);
  const { data: planet, isLoading } = useFetchSingleDataByIdQuery({
    endpoint,
    id,
  });

  console.log(planet);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <Link to={`/${endpoint}/${id}`}>
          <div>
            <img src={imgUrl} alt={planet.name + " image"} />
          </div>
          <div>{planet.name}</div>
        </Link>
      )}
    </>
  );
};

export default HomePlanet;
