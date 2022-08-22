


//import fetch from 'node-fetch';
class Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
    constructor(id: number, name: string, image: string, type: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
    }
}
class PokemonData {
    pokemons: Pokemon[] = [];
    shuffle = () => {
        for (let i = 0; i < this.pokemons.length; i++) {
            let j: number = Math.round(Math.random() * this.pokemons.length);

            let temp = this.pokemons[i];
            this.pokemons[i] = this.pokemons[j];
            this.pokemons[j] = temp;
        }
    }
    template = (pokeItem: Pokemon) => {

        return (` <div class="pokemon" >
                    <div>ID:${pokeItem.id} </div> 
                    <img src="${pokeItem.image}" alt="${pokeItem.type}">
                </div> `);
    }
    fetchData = async (root: HTMLElement) => {




        for (let i = 1; i <= 20; i++) {
            let data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`); // lay thong ten internet let pokemon: any=await
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


}
//let root = document.getElementById("app");

let root = <HTMLElement>document.getElementById('app');

if (root) {
    let header: PokemonData = new PokemonData();
    header.fetchData(root);
}
//////////////////////////
let root1 = <HTMLElement>document.getElementById('app');

if (root1) {
    let header: PokemonData = new PokemonData();
    header.fetchData(root1);
}



