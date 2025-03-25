type Sprites = {
  back_default: string | null,
  back_female: string | null,
  front_default: string | null,
  front_female: string | null
}

type PokeType = {
  id: number,
  name: string,
  icon: string,
}

type Pokemon = {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  weight: number,
  sprites: Sprites,
  types: Array<PokeType>
}

export const pokedex: Array<Pokemon> = [
  {
    id: 1,
    name: "bulbasaur",
    base_experience: 64,
    height: 7,
    weight: 69,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female: null
    },
    types: [
      {
        id: 12,
        name: "grass",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 2,
    name: "ivysaur",
    base_experience: 142,
    height: 10,
    weight: 130,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      front_female: null
    },
    types: [
      {
        id: 12,
        name: "grass",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 3,
    name: "venusaur",
    base_experience: 263,
    height: 20,
    weight: 1000,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png"
    },
    types: [
      {
        id: 12,
        name: "grass",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 4,
    name: "charmander",
    base_experience: 62,
    height: 6,
    weight: 85,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      front_female: null
    },
    types: [
      {
        id: 10,
        name: "fire",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/10.png"
      }
    ]
  },
  {
    id: 5,
    name: "charmeleon",
    base_experience: 142,
    height: 11,
    weight: 190,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      front_female: null
    },
    types: [
      {
        id: 10,
        name: "fire",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/10.png"
      }
    ]
  },
  {
    id: 6,
    name: "charizard",
    base_experience: 267,
    height: 17,
    weight: 905,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      front_female: null
    },
    types: [
      {
        id: 10,
        name: "fire",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/10.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 7,
    name: "squirtle",
    base_experience: 63,
    height: 5,
    weight: 90,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      front_female: null
    },
    types: [
      {
        id: 11,
        name: "water",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/11.png"
      }
    ]
  },
  {
    id: 8,
    name: "wartortle",
    base_experience: 142,
    height: 10,
    weight: 225,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      front_female: null
    },
    types: [
      {
        id: 11,
        name: "water",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/11.png"
      }
    ]
  },
  {
    id: 9,
    name: "blastoise",
    base_experience: 265,
    height: 16,
    weight: 855,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      front_female: null
    },
    types: [
      {
        id: 11,
        name: "water",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/11.png"
      }
    ]
  },
  {
    id: 10,
    name: "caterpie",
    base_experience: 39,
    height: 3,
    weight: 29,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      }
    ]
  },
  {
    id: 11,
    name: "metapod",
    base_experience: 72,
    height: 7,
    weight: 99,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      }
    ]
  },
  {
    id: 12,
    name: "butterfree",
    base_experience: 198,
    height: 11,
    weight: 320,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/12.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/12.png"
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 13,
    name: "weedle",
    base_experience: 39,
    height: 3,
    weight: 32,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 14,
    name: "kakuna",
    base_experience: 72,
    height: 6,
    weight: 100,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 15,
    name: "beedrill",
    base_experience: 178,
    height: 10,
    weight: 295,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 16,
    name: "pidgey",
    base_experience: 50,
    height: 3,
    weight: 18,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      front_female: null
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 17,
    name: "pidgeotto",
    base_experience: 122,
    height: 11,
    weight: 300,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      front_female: null
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 18,
    name: "pidgeot",
    base_experience: 216,
    height: 15,
    weight: 395,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      front_female: null
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 19,
    name: "rattata",
    base_experience: 51,
    height: 3,
    weight: 35,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/19.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/19.png"
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      }
    ]
  },
  {
    id: 20,
    name: "raticate",
    base_experience: 145,
    height: 7,
    weight: 185,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/20.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/20.png"
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      }
    ]
  },
  {
    id: 21,
    name: "spearow",
    base_experience: 52,
    height: 3,
    weight: 20,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      front_female: null
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 22,
    name: "fearow",
    base_experience: 155,
    height: 12,
    weight: 380,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      front_female: null
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 23,
    name: "ekans",
    base_experience: 58,
    height: 20,
    weight: 69,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      front_female: null
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 24,
    name: "arbok",
    base_experience: 157,
    height: 35,
    weight: 650,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      front_female: null
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 25,
    name: "pikachu",
    base_experience: 112,
    height: 4,
    weight: 60,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png"
    },
    types: [
      {
        id: 13,
        name: "electric",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/13.png"
      }
    ]
  },
  {
    id: 26,
    name: "raichu",
    base_experience: 243,
    height: 8,
    weight: 300,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/26.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/26.png"
    },
    types: [
      {
        id: 13,
        name: "electric",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/13.png"
      }
    ]
  },
  {
    id: 27,
    name: "sandshrew",
    base_experience: 60,
    height: 6,
    weight: 120,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
      front_female: null
    },
    types: [
      {
        id: 5,
        name: "ground",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/5.png"
      }
    ]
  },
  {
    id: 28,
    name: "sandslash",
    base_experience: 158,
    height: 10,
    weight: 295,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
      front_female: null
    },
    types: [
      {
        id: 5,
        name: "ground",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/5.png"
      }
    ]
  },
  {
    id: 29,
    name: "nidoran-f",
    base_experience: 55,
    height: 4,
    weight: 70,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
      front_female: null
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 30,
    name: "nidorina",
    base_experience: 128,
    height: 8,
    weight: 200,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
      front_female: null
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 31,
    name: "nidoqueen",
    base_experience: 253,
    height: 13,
    weight: 600,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
      front_female: null
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      },
      {
        id: 5,
        name: "ground",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/5.png"
      }
    ]
  },
  {
    id: 32,
    name: "nidoran-m",
    base_experience: 55,
    height: 5,
    weight: 90,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
      front_female: null
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 33,
    name: "nidorino",
    base_experience: 128,
    height: 9,
    weight: 195,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
      front_female: null
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 34,
    name: "nidoking",
    base_experience: 253,
    height: 14,
    weight: 620,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
      front_female: null
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      },
      {
        id: 5,
        name: "ground",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/5.png"
      }
    ]
  },
  {
    id: 35,
    name: "clefairy",
    base_experience: 113,
    height: 6,
    weight: 75,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      front_female: null
    },
    types: [
      {
        id: 18,
        name: "fairy",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/18.png"
      }
    ]
  },
  {
    id: 36,
    name: "clefable",
    base_experience: 242,
    height: 13,
    weight: 400,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
      front_female: null
    },
    types: [
      {
        id: 18,
        name: "fairy",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/18.png"
      }
    ]
  },
  {
    id: 37,
    name: "vulpix",
    base_experience: 60,
    height: 6,
    weight: 99,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
      front_female: null
    },
    types: [
      {
        id: 10,
        name: "fire",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/10.png"
      }
    ]
  },
  {
    id: 38,
    name: "ninetales",
    base_experience: 177,
    height: 11,
    weight: 199,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
      front_female: null
    },
    types: [
      {
        id: 10,
        name: "fire",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/10.png"
      }
    ]
  },
  {
    id: 39,
    name: "jigglypuff",
    base_experience: 95,
    height: 5,
    weight: 55,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      front_female: null
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      },
      {
        id: 18,
        name: "fairy",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/18.png"
      }
    ]
  },
  {
    id: 40,
    name: "wigglytuff",
    base_experience: 218,
    height: 10,
    weight: 120,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
      front_female: null
    },
    types: [
      {
        id: 1,
        name: "normal",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png"
      },
      {
        id: 18,
        name: "fairy",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/18.png"
      }
    ]
  },
  {
    id: 41,
    name: "zubat",
    base_experience: 49,
    height: 8,
    weight: 75,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/41.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/41.png"
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 42,
    name: "golbat",
    base_experience: 159,
    height: 16,
    weight: 550,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/42.png"
    },
    types: [
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      },
      {
        id: 3,
        name: "flying",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png"
      }
    ]
  },
  {
    id: 43,
    name: "oddish",
    base_experience: 64,
    height: 5,
    weight: 54,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
      front_female: null
    },
    types: [
      {
        id: 12,
        name: "grass",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 44,
    name: "gloom",
    base_experience: 138,
    height: 8,
    weight: 86,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/44.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/44.png"
    },
    types: [
      {
        id: 12,
        name: "grass",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 45,
    name: "vileplume",
    base_experience: 245,
    height: 12,
    weight: 186,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png",
      back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/45.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
      front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/45.png"
    },
    types: [
      {
        id: 12,
        name: "grass",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 46,
    name: "paras",
    base_experience: 57,
    height: 3,
    weight: 54,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      },
      {
        id: 12,
        name: "grass",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png"
      }
    ]
  },
  {
    id: 47,
    name: "parasect",
    base_experience: 142,
    height: 10,
    weight: 295,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      },
      {
        id: 12,
        name: "grass",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png"
      }
    ]
  },
  {
    id: 48,
    name: "venonat",
    base_experience: 61,
    height: 10,
    weight: 300,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 49,
    name: "venomoth",
    base_experience: 158,
    height: 15,
    weight: 125,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
      front_female: null
    },
    types: [
      {
        id: 7,
        name: "bug",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png"
      },
      {
        id: 4,
        name: "poison",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png"
      }
    ]
  },
  {
    id: 50,
    name: "diglett",
    base_experience: 53,
    height: 2,
    weight: 8,
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png",
      back_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
      front_female: null
    },
    types: [
      {
        id: 5,
        name: "ground",
        icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/5.png"
      }
    ]
  }
]
