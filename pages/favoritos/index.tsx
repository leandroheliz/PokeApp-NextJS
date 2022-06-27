import { CardFavoritos, NoFavoritos } from "../../components/ui";
import { useEffect, useState } from "react";

import { Container } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { localFavoritos } from "../../utils";

const FavoritosPage = () => {
  const [favorito, setFavorito] = useState<number[]>([]);

  useEffect(() => {
    setFavorito(localFavoritos.pokemons());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      <Container css={{mt:'50px'}}>
      {favorito.length === 0 ? (<NoFavoritos />) : (<CardFavoritos  pokemons={favorito}/>)}
      </Container>
      
    </Layout>
  );
};

export default FavoritosPage;
