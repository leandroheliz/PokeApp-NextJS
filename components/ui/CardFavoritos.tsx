import * as React from "react";

import { Grid } from "@nextui-org/react";
import { PokemonFavorito } from "./PokemonFavorito";

type Props = {
  pokemons: number[];
};

export const CardFavoritos: React.FC<Props> = ({ pokemons }) => {

  return (
    <Grid.Container gap={1} direction="row" justify="center">
      {pokemons.map((id) => (
        <PokemonFavorito pokemonId={id} key={id} />
        ))}
    </Grid.Container>
  );
};
