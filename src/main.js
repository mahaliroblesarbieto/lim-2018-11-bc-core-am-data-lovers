let showPokemonFilter = '';
for(let i = 0;  i < 151;  i++){
  let imagen = window.POKEMON.pokemon[i].img;
  let name = window.POKEMON.pokemon[i].name;
 showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
 '<div class="pokemon col-md-12 col-sm-12 col-xs-12">'+
 '<img src="'+imagen+'" border="1" >'+'<h3>'+name+'</h3>' +
 '</div>'+  '</article>';
}
document.getElementById('pokemon-list').innerHTML = showPokemonFilter;

const typePokemon = document.getElementById('pokemon-type');
typePokemon.addEventListener('change', () =>  {
  const typePokemonValue = typePokemon.value;
  const typeData = 'type';
  const arrListOfIdPokemonType = filterData(typeData,typePokemonValue);
  let showPokemonFilter = '';
  for(let i = 0;  i < arrListOfIdPokemonType.length;  i++){
    var imagen = window.POKEMON.pokemon[arrListOfIdPokemonType[i]-1].img;
    var name = window.POKEMON.pokemon[arrListOfIdPokemonType[i]-1].name;
   showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
   '<div class="pokemon col-md-12 col-sm-12 col-xs-12">'+
   '<img src="'+imagen+'" border="1">'+'<h3>'+name+'</h3>' +
   '</div>'+  '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonFilter;
});

const eggPokemon  = document.getElementById('pokemon-egg');
eggPokemon.addEventListener('change', ()  =>  {
  const typeData = 'egg';
  const eggPokemonValue = eggPokemon.value;
  const arrPokemonEgg = filterData(typeData,eggPokemonValue);
  let showPokemonFilter = "";
  for(let i = 0;  i < arrPokemonEgg.length;  i++){
   showPokemonFilter += '<article class="col-md-3 col-sm-4 col-xs-6">' +
   '<div class="pokemon col-md-12 col-sm-12 col-xs-12">'+
   '<img src="'+ arrPokemonEgg[i].img+'" border="1">'+'<h3>'+arrPokemonEgg[i].name+'</h3>' +
   '</div>'+  '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonFilter;
});
