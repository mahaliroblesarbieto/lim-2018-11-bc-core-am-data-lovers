const pokemonData = window.POKEMON.pokemon;
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

document.getElementById('button-weaknesses').addEventListener('click', () => {
  const arrTypePokemon = ["Water","Bug","Dragon","Electric","Ghost","Fire","Ice","Fighting","Normal","Grass","Psychic","Rock","Ground","Poison","Flying"];
  const arrPromedio2 = pokemonFunction.stats(pokemonData, arrTypePokemon);
  const arrPromedioSort = arrPromedio2.sort();
const arrPromedioSortReverse = arrPromedioSort.reverse();

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Tipo de Pokémon', 'Promedio de Debilidades', {role: 'style'}],
        ['Roca', arrPromedioSortReverse[0], 'color: #414449'],
        ['Hierba', arrPromedioSortReverse[1], 'color: #558720'],
        ['Tierra', arrPromedioSortReverse[2], 'color: #671502'],
        ['Hielo', arrPromedioSortReverse[3], 'color: #6c72f3'], 
        ['Bicho', arrPromedioSortReverse[4], 'color: #16d45d'],
        ['Psíquico', arrPromedioSortReverse[5], 'color: #af5ed9'],
        ['Fantasma', arrPromedioSortReverse[6], 'color: #612baa'],
        ['Dragón', arrPromedioSortReverse[7], 'color: #612baa'],
        ['Veneno', arrPromedioSortReverse[8], 'color: #4d215e'],
        ['Lucha', arrPromedioSortReverse[9], 'color: #fc1f1f'],
        ['Fuego', arrPromedioSortReverse[10], 'color: #ff8400'],
        ['Volador', arrPromedioSortReverse[11], 'color: #45a4a3'],
        ['Agua', arrPromedioSortReverse[12], 'color: #a2def4'],
        ['Eléctrico', arrPromedioSortReverse[13], 'color: #faf329'],
        ['Normal', arrPromedioSortReverse[14], 'color: #a8aaae']
        
      ]);

      var options = {
        title: 'Promedio de debilidades por tipo de Pokémon de mayor a menor',
        chartArea: {width: '80%'},
        hAxis: {
          viewWindowMode:'explicit',
            viewWindow: {
              max:5.5,
              min:0
            }
        },
        vAxis: {
          title: 'Tipos de Pokémon'
          
        },
        legend: {position: 'none'}
      };

      var chart = new google.visualization.BarChart(document.getElementById('pokemon-list'));

      chart.draw(data, options);
    }


});