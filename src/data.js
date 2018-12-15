window.POKEMON  = POKEMON;
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

const pokemonLength  = window.POKEMON.pokemon.length;
function filterTypeOfPokemon(typePokemonValue){
  let listIdPokemonType = [];
  for(let i = 0;  i < pokemonLength;  i++){
    let lengthTypePokemon = window.POKEMON.pokemon[i].type.length;
    for(let j = 0;  j < lengthTypePokemon; j++){
      let typeOfPokemon = window.POKEMON.pokemon[i].type[j];
      if(typeOfPokemon  == typePokemonValue){
        listIdPokemonType.push(window.POKEMON.pokemon[i].id);
      }
    }
  }
  return  listIdPokemonType;
}

function filterEggOfPokemon(eggPokemonValue){
  const arrFilter = window.POKEMON.pokemon.filter(compare  =>  (compare.egg  ==  eggPokemonValue));
  return arrFilter;
}
