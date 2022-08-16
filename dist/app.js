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
let Poke;
let pokemons = []; // tao ra mang cac phan tu rong
function template(pokeItem) {
    return ` <div class="pokemon">
                <div>ID:${pokeItem.id} </div> 
                <img src="${pokeItem.image}" alt="${pokeItem.type}">
            </div> `;
}
// ham lay du lieu tu website
function fetchData(root) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 1; i <= 20; i++) {
            let data = yield fetch(`https://pokeapi.co/api/v2/pokemon/${i}`); // lay thong ten internet let pokemon: any=await
            let pokemon = yield data.json();
            console.log(pokemon);
            let { name: pokename, url } = pokemon.abilities[0].ability;
            let { front_default: imageUrl } = pokemon.sprites;
            let { name: type } = pokemon.type[0].type;
            let poke = {
                id: i,
                name: pokename,
                image: imageUrl,
                type: type
            };
            pokemons.push(poke);
        }
        console.log(pokemons);
    });
}
const root = document.getElementById("app");
console.log(root);
if (root) {
    fetchData(root);
}
