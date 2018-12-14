// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.POKEMON  = POKEMON;
const amountOfPokemon  = window.POKEMON.pokemon.length;
//console.log(amountOfPokemon);
//let nameOfPokemones  =  [];
function filterTypeOfPokemon(typePokemonValue){
  let listOfIdPokemonType = [];
for(let i = 0;  i < amountOfPokemon;  i++){
//console.log(window.POKEMON.pokemon[i].name);
//console.log(window.POKEMON.pokemon[i].type.length);
let lengthTypePokemon = window.POKEMON.pokemon[i].type.length;
for(let j = 0;  j < lengthTypePokemon; j++){
//console.log(window.POKEMON.pokemon[i].type[j]);
let typeOfPokemon = window.POKEMON.pokemon[i].type[j];
if(typeOfPokemon  == typePokemonValue){
//console.log(window.POKEMON.pokemon[i].name);
listOfIdPokemonType.push(window.POKEMON.pokemon[i].id);
}
}
}
return  listOfIdPokemonType;
}
