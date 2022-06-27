import * as React from "react";

import { Button, Card, Container, Grid, Spacer } from "@nextui-org/react";

import { ImCross } from "react-icons/im";
import { localFavoritos } from "../../utils";
import { useRouter } from "next/router";

type Props = {
  pokemonId: number;
};

export const PokemonFavorito: React.FC<Props> = ({ pokemonId }) => {
  const [isfavorito, setIsFavorito] = React.useState(
    localFavoritos.existFavorito(pokemonId)
  );

  const router = useRouter();

  const goFavorite = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  const toggleFavorite = () => {
    localFavoritos.toggleFavorito(pokemonId);
    setIsFavorito(!isfavorito);
  };

  return (
    <Grid key={pokemonId} xl={2}>
        <Card isHoverable css={{ padding: 10, w:'300px', h:'300px' }} isPressable variant="bordered">
          <Container display="flex" justify="flex-end" css={{p:'0'}}>
          <Button
            color="error"
            auto
            ghost={!isfavorito}
            onClick={toggleFavorite}
            className='btn-delete'
            >
            <ImCross size={20} />
          </Button>
            </Container>
            <Spacer/>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width={"100%"}
            height={150}
          />
          <Spacer />
        <Button onClick={goFavorite} color="gradient" auto ghost>
         Ver Pokemon
        </Button>
        </Card>
    </Grid>
  );
};
