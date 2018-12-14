const typePokemon = document.getElementById("pokemontype");
typePokemon.addEventListener('change', showTypeFilter);

function showTypeFilter(){
const typePokemonValue = typePokemon.value;
const arrListOfIdPokemonType  = filterTypeOfPokemon(typePokemonValue);
//console.log(arrListOfIdPokemonType);
let show_pokemon_filter = "";
for(let i = 0;  i < arrListOfIdPokemonType.length;  i++){
//console.log(window.POKEMON.pokemon[arrListOfIdPokemonType[i]-1].name);
var imagen = window.POKEMON.pokemon[arrListOfIdPokemonType[i]-1].img;
var name = window.POKEMON.pokemon[arrListOfIdPokemonType[i]-1].name;

 show_pokemon_filter = show_pokemon_filter +
 '<article  class="pokemon col-md-2 col-sm-3 col-xs-6">' +
 '<img src="'+imagen+'" border="1" >'+
 '<br>' +
 '<p>'+name+'</p>' +
 '</article>';


}
document.getElementById("pokemon-list").innerHTML = show_pokemon_filter;
}



// E CARGA AL INICIAR
let show_pokemon_filter = "";
for(let i = 0;  i < 151;  i++){
var imagen = window.POKEMON.pokemon[i].img;
var name = window.POKEMON.pokemon[i].name;

 show_pokemon_filter = show_pokemon_filter +
 '<article  class="pokemon col-md-2 col-sm-3 col-xs-6">' +
 '<img src="'+imagen+'" border="1" >'+
 '<br>' +
 '<p>'+name+'</p>' +
 '</article>';


}
document.getElementById("pokemon-list").innerHTML = show_pokemon_filter;
