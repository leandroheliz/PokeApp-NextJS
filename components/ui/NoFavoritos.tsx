import { Button, Container, Image, Link, Spacer, Text } from "@nextui-org/react";

import NextLink from "next/link";

export const NoFavoritos = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        heigth: "calc(100vh - 200px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Spacer/>
      <Text h1 css={{mt:'50px'}}>Todavia no Agregaste Favoritos.</Text>
      <Image
        src={"/images/pokeball.png"}
        alt="Camelia Blanco Y Mas"
        width={200}
        height={200}
      />
      <NextLink href={'/'} passHref>
        <Link>
        <Button auto color="secondary" rounded flat>
        Volver al Inicio
        </Button>
        </Link>
      </NextLink>
    </Container>
  );
};
