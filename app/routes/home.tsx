import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resu!Nova" },
    { name: "description", content: "an AI Powered ATS Web App" },
  ];
}

export default function Home() {
  return <div>ResuNova</div>
}
