import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [counter, setCounter] = useState(0)

  return <div>
    <p>Button pressed {counter} times</p>
    <button onClick={() => setCounter(counter + 1)}>Click me 🖱️</button>
  </div>
}
