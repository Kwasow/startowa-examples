import { Box, Card, Container, Grid2, Typography } from "@mui/material";
import type { Route } from "./+types/home";
import { pokedex, type Pokemon } from '../data/pokedex'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type PokemonItemProps = {
  pokemon: Pokemon
}

function PokemonItem(props: PokemonItemProps) {
  const pokemon = props.pokemon

  return <Card style={{ padding: 12 }}>
    <Grid2 container direction="row" justifyContent="space-between">
      <Typography>{pokemon.id}</Typography>
      <img src={pokemon.types[0].icon} style={{ width: 100 }} />
    </Grid2>
    <Container>
      <img src={pokemon.sprites.front_default || ""} style={{ alignItems: 'center' }}/>
    </Container>
    <Typography variant="h3">{pokemon.name}</Typography>
  </Card>
}

export default function Home() {
  return <Box>
    <Grid2 container spacing={4} size="auto">
      {
        pokedex.map((pokemon, index) => {
          return <PokemonItem pokemon={pokemon} key={index}/>
        })
      }
    </Grid2>
  </Box>
}
