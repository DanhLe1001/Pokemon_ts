"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import fetch from 'node-fetch';
class Pokemon {
    constructor(id, name, image, type) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
    }
}
class PokemonData {
    constructor() {
        this.pokemons = [];
        this.shuffle = () => {
            for (let i = 0; i < this.pokemons.length; i++) {
                let j = Math.round(Math.random() * this.pokemons.length);
                let temp = this.pokemons[i];
                this.pokemons[i] = this.pokemons[j];
                this.pokemons[j] = temp;
            }
        };
        this.template = (pokeItem) => {
            return (` <div class="pokemon" >
                    <div>ID:${pokeItem.id} </div> 
                    <img src="${pokeItem.image}" alt="${pokeItem.type}">
                </div> `);
        };
        this.fetchData = (root) => __awaiter(this, void 0, void 0, function* () {
            for (let i = 1; i <= 20; i++) {
                let data = yield fetch(`https://pokeapi.co/api/v2/pokemon/${i}`); // lay thong ten internet let pokemon: any=await
                let pokemon = yield data.json();
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
                root.innerHTML += this.template(Element);
            });
        });
    }
}
//let root = document.getElementById("app");
const root = document.getElementById('app');
if (root) {
    let header = new PokemonData();
    header.fetchData(root);
}
