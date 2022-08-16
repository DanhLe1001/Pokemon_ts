

let Poke: {
    id: number;
    name: string;
    image: string;
    type: string;
};
let pokemons: {
    id: number;
    name: string;
    image: string;
    type: string;
}[] = []; // tao ra mang cac phan tu rong

function template(pokeItem: {
    id: number;
    name: string;
    image: string;
    type: string;
}) {
    return ` <div class="pokemon">
                <div>ID:${pokeItem.id} </div> 
                <img src="${pokeItem.image}" alt="${pokeItem.type}">
            </div> `;
}

// ham lay du lieu tu website
async function fetchData(root: HTMLElement) {
    for (let i = 1; i <= 20; i++) {
        let data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`); // lay thong ten internet let pokemon: any=await
        let pokemon: any = await data.json();
        console.log(pokemon);


        let { name: pokename, url } = pokemon.abilities[0].ability;
        let { front_default: imageUrl } = pokemon.sprites;
        let { name: type } = pokemon.type[0].type;
        let poke = {
            id: i,
            name: pokename,
            image: imageUrl,
            type: type
        }
        pokemons.push(poke);
    }
    console.log(pokemons);
}
const root = document.getElementById("app");
console.log(root);

if (root) {
    fetchData(root);
}