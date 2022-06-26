import * as React from "react";

import { Card, Grid } from "@nextui-org/react";

import { useRouter } from "next/router";

type Props = {
  pokemonId: number;
};

export const PokemonFavorito: React.FC<Props> = ({ pokemonId }) => {
  
  const router = useRouter();

  const goFavorite = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={12} sm={6} md={4} xl={2} key={pokemonId} onClick={goFavorite}>
      <Card isHoverable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={150}
        />
      </Card>
    </Grid>
  );
};
