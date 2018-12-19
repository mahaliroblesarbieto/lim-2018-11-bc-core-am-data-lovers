require('../src/data.js');

const input = 
[
  {id: 1, "num": "001", "name": "Bulbasaur", "type": [
    "Grass",
    "Poison"]
  },
  {"id": 4, "num": "004", "name": "Charmander", "type": [
      "Fire"]
  },
  {"id": 7, "num": "007", "name": "Squirtle", "type": [
      "Water"]
  },
];

describe('pokemon', () => {
  it('Debería ser un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
  describe('pokemon.filterData', () => {
    it('Debería ser una función', () => {
      expect(typeof window.pokemon.filterData).toBe('function');
    });
    it('Debería retornar un array de objetos, con la propiedad type' , () => {
      expect();
    });
  });
});