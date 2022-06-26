import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Image,
  Spacer,
  Text,
} from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemon, localFavoritos } from "../../utils";

import { Layout } from "../../components/layouts";
import { Row } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { pokeApi } from "../../api";
import { useState } from "react";

interface Props {
  pokemon: Pokemon;
}

const PokemonName: NextPage<Props> = ({ pokemon }) => {
  const [isfavorito, setIsFavorito] = useState(
    localFavoritos.existFavorito(pokemon.id)
  );

  const toggleFavorite = () => {
    localFavoritos.toggleFavorito(pokemon.id);
    setIsFavorito(!isfavorito);
    if (isfavorito) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 100,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2} justify="center">
        <Grid xs={12} sm={6}>
          <Card isPressable isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Spacer />
        <Grid xs={12} sm={6}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-around" }}
            >
              <Container display="flex" justify="center">
                <Row>
                  <Col>
                    <Text h1>#{pokemon.id}</Text>
                    <Text h1 transform="capitalize">
                      {pokemon.name}
                    </Text>
                  </Col>
                  <Col>
                    <Button color="gradient" ghost>
                      Volver Atrás
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      color="gradient"
                      ghost={!isfavorito}
                      onClick={toggleFavorite}
                    >
                      {isfavorito
                        ? "Quitar de Favoritos"
                        : "Agregar a Favoritos"}
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemonName: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonName.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemon(name),
    },
  };
};

export default PokemonName;
