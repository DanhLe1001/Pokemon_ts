let pokemon: any = await data.json();
console.log(pokemon);
let { name: pokename, url } = pokemon.abilities[0].ability;
let { front_default: imageUrl } = pokemon.sprites;
let { name: type } = pokemon.type[0].type;

let poke = new Pokemon(i, pokename, imageUrl, type);

this.pokemons.push(poke);
}
console.log(this.pokemons);
this.shuffle();

this.pokemons.forEach(Element => {
    root.innerHTML += this.template(Element)
})
}

