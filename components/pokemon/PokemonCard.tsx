import * as React from "react";

import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";

import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const pokeClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={12} sm={6} md={4} xl={2} key={pokemon.id}>
      <Card
        css={{ w: "100%", h: "400px", borderRadius: "0px" }}
        isPressable
        isHoverable
        variant="bordered"
      >
       <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
       <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA" className="idPokemon">
          #{pokemon.id} - {pokemon.name}
        </Text>
      </Col>
        </Card.Header>
        <Card.Body css={{ p:0 }}>
          <Card.Image
            src={pokemon.img}
            objectFit="cover"
            width="100%"
            height="100%"
            alt={pokemon.name}
            />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col span={3}>
                  <Card.Image
                    src={pokemon.img}
                    height={50}
                    width={50}
                    alt={pokemon.name}
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  className='btn-pokemon'
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    onClick={pokeClick}
                  >
                    Ver Pokemon
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
