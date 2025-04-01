import { Box, Card, Container, Dialog, Grid2, Modal, Typography } from "@mui/material";
import type { Route } from "./+types/home";
import { pokedex, type Pokemon } from '../data/pokedex'
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type PokemonItemProps = {
  pokemon: Pokemon,
  onClick?: () => void,
}

function PokemonItem(props: PokemonItemProps) {
  const pokemon = props.pokemon

  return <Card style={{ padding: 12 }} onClick={props.onClick}>
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

type PokemonDetailsDialogProps = {
  pokemon: Pokemon | null,
  onClose: () => void,
}

function PokemonDetailsDialog(props: PokemonDetailsDialogProps) {
  const { pokemon, onClose } = props
  
  return <Dialog
    open={pokemon != null}
    onClose={onClose}
  >
    {
      pokemon != null
        ? <PokemonDetails pokemon={pokemon} />
        : <p>Error</p>
    }
  </Dialog>
}

type PokemonDetailsProps = {
  pokemon: Pokemon,
}

function PokemonDetails(props: PokemonDetailsProps) {
  const pokemon = props.pokemon

  return <Box style={{ padding: 16 }}>
    <Grid2 container direction="row" justifyContent="space-between">
      <Typography>{pokemon.id}</Typography>
      <img src={pokemon.types[0].icon} style={{ width: 100 }} />
    </Grid2>
    <Container>
      <img src={pokemon.sprites.front_default || ""} style={{ alignItems: 'center' }}/>
    </Container>
    <Typography variant="h3">{pokemon.name}</Typography>
    <Typography variant="body1"><b>Wzrost:</b> {pokemon.height}</Typography>
    <Typography variant="body1"><b>Masa:</b> {pokemon.weight}</Typography>
    <Typography variant="body1"><b>Doświadczenie:</b> {pokemon.base_experience}</Typography>
  </Box>
}

export default function Home() {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null)

  return <>
    <PokemonDetailsDialog pokemon={pokemonDetails} onClose={() => setPokemonDetails(null)} />
    <Box>
      <Grid2 container spacing={4} size="auto">
        {
          pokedex.map((pokemon, index) => {
            return <PokemonItem
              pokemon={pokemon}
              key={index}
              onClick={() => setPokemonDetails(pokemon)}
            />
          })
        }
      </Grid2>
    </Box>
  </>
}
