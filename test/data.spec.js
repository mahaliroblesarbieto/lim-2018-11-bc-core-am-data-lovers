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

describe('pokemon', () => {
  it('Debería ser un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
});

describe('pokemon.filterData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.pokemon.filterData).toBe('function');
  });
});

describe('pokemon.sortData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.pokemon.sortData).toBe('function');
  });
  it('Debería retornar un array de objetos con los datos de ID ordenado de manera ascendente', () => {
    expect(window.pokemon.sortData(input, 'number', 'asc')).toEqual(ouput);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la A a la Z', () => {
    expect(window.pokemon.sortData(input, 'name-one', 'asc')).toEqual(ouput2);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la Z a la A', () => {
    expect(window.pokemon.sortData(input, 'name-two', 'desc')).toEqual(ouput3);
  });
});