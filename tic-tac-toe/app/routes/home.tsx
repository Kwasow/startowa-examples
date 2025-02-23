import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tic-tac-toe" },
    { name: "description", content: "A new beginning!" },
  ];
}

export default function Home() {
  return <p>Czas zrobić kółko i krzyżyk</p>;
}
