function filterData(data, filterBy, condition) {
  let listIdPokemonType = [];
  switch (filterBy) {
  case 'Tipo':
    listIdPokemonType = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));
    break;
  case 'Huevo':
    listIdPokemonType = data.filter(compare => (compare.egg === condition));
    break;
  default:
  }
  return listIdPokemonType;
}

function sortData(data, sortBy, condition) {
  let listPokemonOrder = [];
  switch (condition) {
  case 'asc':
    if (sortBy === 'number') {
      listPokemonOrder = data.sort((aa, bb) => (aa.id > bb.id ? 1 : -1));
    } else {
      listPokemonOrder = data.sort((aa, bb) => (aa.name > bb.name ? 1 : -1));
    }
    break;
  case 'desc':
    listPokemonOrder = data.sort((aa, bb) => (aa.name > bb.name ? 1 : -1)).reverse();
    break;
  default:
  }
  return listPokemonOrder;
}

function computeStats(data, condition, count) {
  const nameFilter = data.filter(compare => (compare.name === condition));
  const newCandy = nameFilter[0].candy_count - count;
  return newCandy;
}

function stats(data, condition) {
  let arrAverage = [];
  for (let i = 0; i < condition.length; i++) {
    const arrFilterPokemonType = data.filter(compare => (compare.type[0] === condition[i] || compare.type[1] === condition[i]));
    const totalWeaknesses = arrFilterPokemonType.reduce(
      (total, pokemon) => total + (pokemon.weaknesses.length), 0);
    const Average = totalWeaknesses / arrFilterPokemonType.length;
    arrAverage.push(Average);
  }
  return arrAverage;
}

window.pokemonFunction = {
  filterData,
  sortData,
  computeStats,
  stats,
};


