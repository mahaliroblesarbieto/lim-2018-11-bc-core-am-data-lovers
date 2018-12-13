// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

window.POKEMON  = POKEMON;
const containerlist = document.getElementById("pokemon-list");
let list  = '';
POKEMON.pokemon.forEach((pokemones)  =>  {
  const li  = `<li>${pokemones.name}</li>`  + `<img src="${pokemones.img}">`;
  list  = list  + li;
})
containerlist.innerHTML = list;
