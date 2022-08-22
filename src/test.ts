let pokemon: any = await data.json();
console.log(pokemon);
let { name: pokename, url } = pokemon.abilities[0].ability;
