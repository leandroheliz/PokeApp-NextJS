import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Image,
  Link,
  Spacer,
  Text,
} from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getPokemon, localFavoritos } from "../../utils";

import { Layout } from "../../components/layouts";
import NextLink from "next/link";
import { Pokemon } from "../../interfaces";
import { Row } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { useState } from "react";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
          <Card isPressable isHoverable css={{ padding: "10px", bg:'none' }}>
            <Card.Body>
            <NextLink href={"/"} passHref>
                      <Link>
                        <Button color="gradient" ghost>
                          Volver Atrás
                        </Button>
                      </Link>
                    </NextLink>
                    <Spacer />
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
              <Spacer />
              <Container display="flex" justify="center">
                     <Button
                      color="gradient"
                      ghost={!isfavorito}
                      onClick={toggleFavorite}>
                    
                      {isfavorito
                        ? "Quitar de Favoritos"
                        : "Agregar a Favoritos"}
                    </Button>
                        </Container>
            </Card.Body>
          </Card>
        </Grid>
        <Spacer />
        <Grid xs={12} sm={6}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-around" }}>
              <Container display="flex" justify="center">
                <Row>
                  <Col>
                  <Container display="flex" alignItems="center" justify="center">
                   <Text h1 transform="uppercase">
                   #{pokemon.id} - {pokemon.name}
                   </Text>
                 </Container>
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
  const pokes = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokes.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string }

  return {
    props: {
      pokemon: await getPokemon(id)
    }
  }
}

export default PokemonPage;
