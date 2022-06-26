import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Spacer,
  Text,
} from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Col } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { Row } from "@nextui-org/react";
import { pokeApi } from "../../api";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Pokemons">
      <Grid.Container css={{ marginTop: "5px" }} gap={2} justify='center'>
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
        <Spacer/>
        <Grid xs={12} sm={6}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-around" }}
            >
              <Container display='flex' justify='center'>
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
              <Button color="gradient" ghost>
                Guardar En Favoritos
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
  const pokes = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokes.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
