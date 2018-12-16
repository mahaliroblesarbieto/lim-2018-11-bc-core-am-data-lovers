window.POKEMON  = POKEMON;
const pokemonLength  = window.POKEMON.pokemon.length;
function filterData(data,condition){
  switch (data) {
    case 'type':
      return filterTypeOfPokemon(condition);
      break;
    case 'egg':
      return filterEggOfPokemon(condition);
      break;
    default:
  }
}
function filterTypeOfPokemon(typePokemonValue){
  let listIdPokemonType = [];
  listIdPokemonType = window.POKEMON.pokemon.filter(compare  =>  (compare.type[0]  ==  typePokemonValue || compare.type[1]  ==  typePokemonValue || compare.type[2]  ==  typePokemonValue));
  return  listIdPokemonType;
}
function filterEggOfPokemon(eggPokemonValue){
  const arrFilter = window.POKEMON.pokemon.filter(compare  =>  (compare.egg  ==  eggPokemonValue));
  return arrFilter;
}
function sortData(data,sortBy,condition){
  let listPokemonOrder = [];
  switch (condition) {
    case 'asc':
    if(sortBy == 'number'){
      listPokemonOrder = data.sort((a, b) => (a.id > b.id ? 1 : -1));
      return listPokemonOrder;
    }else{
      listPokemonOrder = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      return listPokemonOrder;
    }
      break;
    case 'desc':
    listPokemonOrder = data.sort((a, b) => (a.name > b.name ? 1 : -1));
    return listPokemonOrder.reverse();
      break;
    default:
  }
}
