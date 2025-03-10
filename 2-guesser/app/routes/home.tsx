import { useState } from "react";
import type { Route } from "./+types/home";
import styled from "styled-components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

interface ResultsProps {
  result: boolean | undefined,
  solution: number | undefined
}

const NiceButton = styled.button`
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  padding: 1vh;
  margin: 1rem;
  border: 0px;
  border-radius: 8px;
  background-color: blue;
`

function Results({result, solution} : ResultsProps) {
  if (result === undefined) {
    return <></>
  }

  if (result) {
    return <p>Zgadłeś!</p>
  } else {
    return <div>
      <p>Nie zgadłeś :((</p>
      <p>Prawidłowa odpowiedź to: {solution}</p>
    </div>
  }
}

export default function Home() {
  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<boolean>()
  const [solution, setSolution] = useState<number>()

  function onGuess() {
    const correct = getRandomInt(3)
    const guess = parseInt(input)

    setResult(correct === guess)
    setSolution(correct)
  }

  return <div>
    <input type="number" onInput={e => setInput(e.target.value)}/>
    <NiceButton onClick={onGuess}>Guess</NiceButton>

    <Results result={result} solution={solution}/>

    {/* {result
      ? <p>Zgadłeś!</p>
      : <div>
          <p>Nie zgadłeś :((</p>
          <p>Prawidłowa odpowiedź to: {solution}</p>
        </div>
    } */}
  </div>
}
