import { Container, Image, Text } from "@nextui-org/react";

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
      <Text h1>Todavia no Agregaste Favoritos.</Text>
      <Image
        src={"/images/pokeball.png"}
        alt="Camelia Blanco Y Mas"
        width={200}
        height={200}
      />
    </Container>
  );
};
