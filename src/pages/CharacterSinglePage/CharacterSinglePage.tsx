import type { FC } from "react";
import { useLocation } from "react-router-dom";

interface CharacterSinglePageProps {}

const CharacterSinglePage: FC<CharacterSinglePageProps> = () => {
  const path = useLocation();
  console.log(path);

  return <div>CharacterSinglePage</div>;
};

export default CharacterSinglePage;
