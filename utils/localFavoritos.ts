/* eslint-disable import/no-anonymous-default-export */
const toggleFavorito = (id: number) => {
  let favoritos: number[] = JSON.parse(
    localStorage.getItem("favoritos") || "[]"
  );
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((pokeId) => pokeId !== id);
  } else {
    favoritos.push(id);
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const existFavorito = (id: number): boolean => {
  if (typeof window === 'undefined' )return false 
  const favoritos: number[] = JSON.parse(localStorage.getItem("favoritos") || "[]")
return favoritos.includes(id)
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favoritos") || "[]");
}


export default { toggleFavorito, existFavorito, pokemons };
