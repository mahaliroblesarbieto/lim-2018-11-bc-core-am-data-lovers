function filterData(data, filterBy, condition) {
  let listIdPokemonType = [];
  switch (filterBy) {
  case 'Tipo':
    listIdPokemonType = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition || compare.type[2] === condition));
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

window.pokemon = {
  filterData,
  sortData,
};
