require('../src/data.js');

const input =
[
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'egg': '2 km'},
  {'id': 2, 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},
  {'id': 3, 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},
  {'id': 4, 'name': 'Charmander', 'type': ['Fire'], 'egg': '2 km'}
];

const ouput =
[
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'egg': '2 km'},
  {'id': 2, 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},
  {'id': 3, 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},
  {'id': 4, 'name': 'Charmander', 'type': ['Fire'], 'egg': '2 km'}
];

const ouput2 =
[
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'egg': '2 km'},
  {'id': 4, 'name': 'Charmander', 'type': ['Fire'], 'egg': '2 km'},
  {'id': 2, 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},
  {'id': 3, 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},

];

const ouput3 =
[
  {'id': 3, 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},
  {'id': 2, 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},
  {'id': 4, 'name': 'Charmander', 'type': ['Fire'], 'egg': '2 km'},
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'egg': '2 km'},
];

const ouput4 =
[
  {'id': 4, 'name': 'Charmander', 'type': ['Fire'], 'egg': '2 km'},
];

const ouput5 =
[
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'egg': '2 km'},
  {'id': 4, 'name': 'Charmander', 'type': ['Fire'], 'egg': '2 km'},
];

const input2 =
[
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'egg': '2 km', 'candy_count': 25},
  {'id': 2, 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs', 'candy_count': 100},
  {'id': 3, 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'egg': 'Not in Eggs'},
  {'id': 4, 'name': 'Charmander', 'type': ['Fire'], 'egg': '2 km', 'candy_count': 25}
];

const input3 =
[
  {'id': 1, 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'id': 2, 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'id': 3, 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'id': 4, 'name': 'Charmander', 'type': ['Fire'], 'weaknesses': ['Water', 'Ground', 'Rock']}
];

const input4 = ['Fire'];

describe('pokemon', () => {
  it('Debería ser un objeto', () => {
    expect(typeof pokemonFunction).toBe('object');
  });
});

describe('pokemon.filterData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.pokemonFunction.filterData).toBe('function');
  });
  it('Debería retornar un array de objetos con los pokemones que sean de tipo Fuego', () => {
    expect(window.pokemonFunction.filterData(input, 'Tipo', 'Fire')).toEqual(ouput4);
  });
  it('Debería retornar un array de objetos con los pokemones que se encuentren en Huevos de 2 km', () => {
    expect(window.pokemonFunction.filterData(input, 'Huevo', '2 km')).toEqual(ouput5);
  });
});

describe('pokemon.sortData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.pokemonFunction.sortData).toBe('function');
  });
  it('Debería retornar un array de objetos con los datos de ID ordenado de manera ascendente', () => {
    expect(window.pokemonFunction.sortData(input, 'number', 'asc')).toEqual(ouput);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la A a la Z', () => {
    expect(window.pokemonFunction.sortData(input, 'name-one', 'asc')).toEqual(ouput2);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la Z a la A', () => {
    expect(window.pokemonFunction.sortData(input, 'name-two', 'desc')).toEqual(ouput3);
  });
});

describe('pokemonFunction.computeStats', () => {
  it('Debería ser una función', () => {
    expect(typeof window.pokemonFunction.computeStats).toBe('function');
  });
  it('Debería retornar la cantidad de caramelos que necesita Bulbasaur para evolucionar a Ivisaur', () => {
    expect(window.pokemonFunction.computeStats(input2, 'Bulbasaur', 10)).toEqual(15);
  });
});

describe('pokemonFunction.stats', () => {
  it('Debería ser una función', () => {
    expect(typeof window.pokemonFunction.stats).toBe('function');
  });
  it('Debería retornar el promedio de debilidades de los pokemone de tipo Fuego', () => {
    expect(window.pokemonFunction.stats(input3, input4)).toEqual([3]);
  });
});
