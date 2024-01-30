import { lazy } from "react";

const SpecieSinglePage = lazy(() => import("../pages/SpecieSinglePage"));
const FilmSlinglePage = lazy(() => import("../pages/FilmSlinglePage"));
const CharacterSinglePage = lazy(() => import("../pages/CharacterSinglePage"));
const ShipSinglePage = lazy(() => import("../pages/ShipSinglePage"));
const PlanetSinglePage = lazy(() => import("../pages/PlanetSinglePage"));

export const paths = [
  {
    route: "characters",
    SingleComponent: CharacterSinglePage,
  },
  { route: "films", SingleComponent: FilmSlinglePage },
  {
    route: "species",
    SingleComponent: SpecieSinglePage,
  },
  {
    route: "planets",
    SingleComponent: PlanetSinglePage,
  },
  { route: "starships", SingleComponent: ShipSinglePage },
];
