import { CardFavoritos, NoFavoritos } from "../../components/ui";
import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { localFavoritos } from "../../utils";

const FavoritosPage = () => {
  const [favorito, setFavorito] = useState<number[]>([]);

  useEffect(() => {
    setFavorito(localFavoritos.pokemons());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favorito.length === 0 ? (<NoFavoritos />) : (<CardFavoritos  pokemons={favorito}/>)}
    </Layout>
  );
};

export default FavoritosPage;
