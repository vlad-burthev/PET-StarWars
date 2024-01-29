import type { FC } from "react";
import { useGetImageUrl } from "../../../utils/hooks/useGetImageUrl";

interface CatalogListItemProps {
  name: string;
  url: string;
}

const CatalogListItem: FC<CatalogListItemProps> = ({ name, url }) => {
  const imgUrl = useGetImageUrl(url);
  console.log(imgUrl);

  return (
    <div>
      <div>
        <img src={imgUrl} alt={`${name} image`} />
        <div>{name}</div>
      </div>
    </div>
  );
};

export default CatalogListItem;
