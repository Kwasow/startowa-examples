import { Box, Card, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Box>
    <Card style={{ padding: 16, margin: 16 }}>
      <Typography variant="h4">Do której klasy chodzisz?</Typography>

      <FormControl>
        <FormLabel>Klasa</FormLabel>

        <RadioGroup name="klasa_radio_group">
          <FormControlLabel value="1LO" control={<Radio />} label="1 LO" />
          <FormControlLabel value="2LO" control={<Radio />} label="2 LO" />
          <FormControlLabel value="3LO" control={<Radio />} label="3 LO" />
          <FormControlLabel value="4LO" control={<Radio />} label="4 LO" />
        </RadioGroup>
      </FormControl>
    </Card>

    <Card style={{ padding: 16, margin: 16 }}>
      <Typography variant="h4">Jakie przedmioty rozszerzasz?</Typography>

      <FormControl>
        <FormLabel>Przedmiot</FormLabel>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Matematyka" />
          <FormControlLabel control={<Checkbox />} label="Informatyka" />
          <FormControlLabel control={<Checkbox />} label="Fizyka" />
          <FormControlLabel control={<Checkbox />} label="Chemia" />
          <FormControlLabel control={<Checkbox />} label="Biologia" />
          <FormControlLabel control={<Checkbox />} label="Geografia" />
          <FormControlLabel control={<Checkbox />} label="Polski" />
          <FormControlLabel control={<Checkbox />} label="Historia" />
          <FormControlLabel control={<Checkbox />} label="WOS" />
        </FormGroup>
      </FormControl>
    </Card>
  </Box>;
}
