const pokemonData = window.POKEMON.pokemon
const pokemonFunction = window.pokemonFunction;
let showPokemonFilter = '';
for (let i = 0; i < 151; i++) {
  let imagen = pokemonData[i].img;
  let name = pokemonData[i].name;
  showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
    '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
    '<img src="' + imagen + '" border="1" >' + '<h3>' + name + '</h3>' +
    '</div>' + '</article>';
}
document.getElementById('pokemon-list').innerHTML = showPokemonFilter;

const typePokemon = document.getElementById('pokemon-type');
typePokemon.addEventListener('change', () => {
  typePokemon.options[0].disabled = true;
  const typeofFilter = 'Tipo';
  const typePokemonValue = typePokemon.value;
  const arrListOfIdPokemonType = pokemonFunction.filterData(pokemonData, typeofFilter, typePokemonValue);
  let showPokemonFilter = '';
  for (let i = 0; i < arrListOfIdPokemonType.length; i++) {
    showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
      '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
      '<img src="' + arrListOfIdPokemonType[i].img + '" border="1">' + '<h3>' + arrListOfIdPokemonType[i].name + '</h3>' +
      '</div>' + '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonFilter;
});

const eggPokemon = document.getElementById('pokemon-egg');
eggPokemon.addEventListener('change', () => {
  eggPokemon.options[0].disabled = true;
  const typeofFilter = 'Huevo';
  const eggPokemonValue = eggPokemon.value;
  const arrPokemonEgg = pokemonFunction.filterData(pokemonData, typeofFilter, eggPokemonValue);
  let showPokemonFilter = '';
  for (let i = 0; i < arrPokemonEgg.length; i++) {
    showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
      '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
      '<img src="' + arrPokemonEgg[i].img + '" border="1">' + '<h3>' + arrPokemonEgg[i].name + '</h3>' +
      '</div>' + '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonFilter;
});

const orderPokemon = document.getElementById('pokemon-order');
orderPokemon.addEventListener('change', () => {
  const orderPokemonValue = orderPokemon.value;
  let order;
  switch (orderPokemonValue) {
  case 'number':
    order = 'asc';
    break;
  case 'name-one':
    order = 'asc';
    break;
  case 'name-two':
    order = 'desc';
    break;
  default:
  }
  const orderPokemonName = pokemonFunction.sortData(pokemonData, orderPokemonValue, order);
  let showPokemonOrder = '';
  for (let i = 0; i < orderPokemonName.length; i++) {
    showPokemonOrder += '<article class="col-md-3 col-sm-4 col-xs-6">' +
      '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
      '<img src="' + orderPokemonName[i].img + '" border="1">' + '<h3>' + orderPokemonName[i].name + '</h3>' +
      '</div>' + '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonOrder;
});

const namePokemon = document.getElementById('enter-text');
const candyCount = document.getElementById('enter-number');
document.getElementById('button-calculate').addEventListener('click', () => {
  const namePokemonValue = namePokemon.value;
  const arrFilter2 = window.POKEMON.pokemon.filter(compare => (compare.name === namePokemonValue));
  const candyCountValue = parseInt(candyCount.value);
  const dataPokemon = window.POKEMON.pokemon;
  const candyCountMissing = pokemonFunction.computeStats(dataPokemon, namePokemonValue, candyCountValue);
  const arrFilter3 = window.POKEMON.pokemon.filter(compare => (compare.name === arrFilter2[0].next_evolution[0].name));

  let pokemonEvolution = '<center>' +
   '<div class="pokemon-evolution ">' +
   '<img src="' + arrFilter2[0].img + '" border="1">' + '<h3> A tu ' + arrFilter2[0].name + ' le falta ' + candyCountMissing + ' caramelos para evolucionar a :</h3>' +
   '<img src="' + arrFilter3[0].img + '" border="1">' +
   '<h3> ' + arrFilter2[0].next_evolution[0].name + '</h3>' +
   '</div>' + '</center>';

  document.getElementById('pokemon-list').innerHTML = pokemonEvolution;
});