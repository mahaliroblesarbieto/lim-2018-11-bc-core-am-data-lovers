fetch('https://raw.githubusercontent.com/Laboratoria/lim-2018-11-bc-core-am-data-lovers/master/src/data/pokemon/pokemon.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let pokemon = data.pokemon;
    contentfunction(pokemon);
  })
  .catch((error) => {
    alert('Hubo un problema con la petición Fetch:' + error.message);
  });

function contentfunction(pokemonData) {
  const pokemonFunction = window.pokemonFunction;
  document.getElementById('pokemon-list').innerHTML = template(pokemonData);

  const typePokemon = document.getElementById('pokemon-type');
  typePokemon.addEventListener('change', () => {
    document.getElementById('pokemon-list').innerHTML = filterEvaluate('Tipo', typePokemon);
  });

  const eggPokemon = document.getElementById('pokemon-egg');
  eggPokemon.addEventListener('change', () => {
    document.getElementById('pokemon-list').innerHTML = filterEvaluate('Huevo', eggPokemon);
  });

  function filterEvaluate(typefilter, element) {
    let templateHtml;
    // Este evento se llama para remover la clase de min-heigth-table que se creo para google charts
    document.getElementById('pokemon-list').classList.remove('min-heigth-table');
    const typeofFilter = typefilter;
    const elementValue = element.value;
    const arrPokemon = pokemonFunction.filterData(pokemonData, typeofFilter, elementValue);
    templateHtml = template(arrPokemon);
    return templateHtml;
  }

  const orderPokemon = document.getElementById('pokemon-order');
  orderPokemon.addEventListener('change', () => {
  // Este evento se llama para remover la clase de min-heigth-table que se creo para google charts
    document.getElementById('pokemon-list').classList.remove('min-heigth-table');
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
    document.getElementById('pokemon-list').innerHTML = template(orderPokemonName);
  });

  const namePokemon = document.getElementById('enter-text');
  const candyCount = document.getElementById('enter-number');
  document.getElementById('button-calculate').addEventListener('click', () => {
  // Este evento se llama para remover la clase de min-heigth-table que se creo para google charts
    document.getElementById('pokemon-list').classList.remove('min-heigth-table');
    const namePokemonValue = namePokemon.value;
    const arrFilter2 = pokemonData.filter(compare => (compare.name === namePokemonValue));
    const candyCountValue = parseInt(candyCount.value);
    const candyCountMissing = pokemonFunction.computeStats(pokemonData, namePokemonValue, candyCountValue);
    const arrFilter3 = pokemonData.filter(compare => (compare.name === arrFilter2[0].next_evolution[0].name));

    let pokemonEvolution = 
   '<div class="pokemon-evolution ">' +
   '<img src="' + arrFilter2[0].img + '" border="1">' + '<h3> A tu ' + arrFilter2[0].name + ' le falta ' + candyCountMissing + ' caramelos para evolucionar a :</h3>' +
   '<img src="' + arrFilter3[0].img + '" border="1">' +
   '<h3> ' + arrFilter2[0].next_evolution[0].name + '</h3>' +
   '</div>';

    document.getElementById('pokemon-list').innerHTML = pokemonEvolution;
  });

  document.getElementById('button-weaknesses').addEventListener('click', () => {
    const arrTypePokemon = ['Water', 'Bug', 'Dragon', 'Electric', 'Ghost', 'Fire', 'Ice', 'Fighting', 'Normal', 'Grass', 'Psychic', 'Rock', 'Ground', 'Poison', 'Flying'];
    const arrPromedioSortReverse = ((pokemonFunction.stats(pokemonData, arrTypePokemon)).sort()).reverse();
    const arrTypeColor = [['Roca', 'color: #414449'], ['Hierba', 'color: #558720'], ['Tierra', 'color: #671502'],
      ['Hielo', 'color: #6c72f3'], ['Bicho', 'color: #16d45d'], ['Psíquico', 'color: #af5ed9'], ['Fantasma', 'color: #612baa'],
      ['Dragón', 'color: #612baa'], ['Veneno', 'color: #4d215e'], ['Lucha', 'color: #fc1f1f'], ['Fuego', 'color: #ff8400'],
      ['Volador', 'color: #45a4a3'], ['Agua', 'color: #a2def4'], ['Eléctrico', 'color: #faf329'], ['Normal', 'color: #a8aaae']];
    const showData = [['Tipo de Pokémon', 'Promedio de Debilidades', {role: 'style'}]];
    for (let i = 0 ; i < arrTypeColor.length ; i++) {
      showData.push([arrTypeColor[i][0], arrPromedioSortReverse[i], arrTypeColor[i][1]]);  
    }
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() { 
      const data = google.visualization.arrayToDataTable(showData);
      const options = {
        title: 'Promedio de debilidades por tipo de Pokémon de mayor a menor',
        chartArea: {width: '70%'},
        hAxis: {
          viewWindowMode: 'explicit',
          viewWindow: {
            max: 5.5,
            min: 0
          }
        },
        vAxis: {
          title: 'Tipos de Pokémon'  
        },
        legend: {position: 'none'}
      };
      const chart = new google.visualization.BarChart(document.getElementById('pokemon-list'));
      document.getElementById('pokemon-list').classList.add('min-heigth-table');
      chart.draw(data, options);
    }
  });

  function template(arrayEvaluate) {
    let showPokemonFilter = '';
    for (let i = 0; i < arrayEvaluate.length; i++) {
      showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
      '<div class="pokemon col-md-12 col-sm-12 col-xs-12">' +
      '<img src="' + arrayEvaluate[i].img + '" border="1" >' + '<h3>' + arrayEvaluate[i].name + '<br> #' + arrayEvaluate[i].num + '</h3>' +
      '</div>' + '</article>';
    }
    return showPokemonFilter;
  }
}