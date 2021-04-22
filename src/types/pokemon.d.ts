type BasicPokemonResponse = {
  name: string;
  url: string;
};

type PokemonCard = {
  name: string;
  id: number;
  sprites: Sprites;
  height?: number;
  weight?: number;
  skills?: Skill[];
};

type Sprites = {
  front_default: string;
};

type Skill = {
  name: string;
};
