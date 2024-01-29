export interface I_Specie {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  films: string[];
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string;
  skin_colors: string;
  url: string;
}

export interface I_Films {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  gravity: string;
  orbital_period: string;
  population: string;
  films: string[];
  residents: string[];
  rotation_period: string;
  surface_water: string;
  title: string;
  terrain: string;
  url: string;
}

export interface I_Starships {
  MGLT: string;
  created: string;
  cargo_capacity: string;
  edited: string;
  crew: string;
  cost_in_credits: string;
  hyperdrive_rating: string;
  length: string[];
  manufacturer: string[];
  max_atmosphering_speed: string;
  model: string;
  films: string[];
  name: string;
  passengers: string;
  pilots: string[];
  starship_class: string[];
  url: string;
}

export interface I_Characters {
  created: string;
  edited: string;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  films: string[];
  hair_color: string;
  height: string[];
  homeworld: string[];
  mass: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
}

export interface I_Planets {
  created: string;
  edited: string;
  name: string;
  climate: string;
  diameter: string;
  films: string[];
  gravity: string;
  orbital_period: string;
  population: string[];
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string[];
  url: string;
}

export type T_CatalogData =
  | I_Specie[]
  | I_Films[]
  | I_Starships[]
  | I_Characters[]
  | I_Planets[];

export type T_ItemListData =
  | I_Specie
  | I_Films
  | I_Starships
  | I_Characters
  | I_Planets;
