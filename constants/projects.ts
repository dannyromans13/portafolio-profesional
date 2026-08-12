export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "JustDoIt Cloud",
    description:
      "Sistema de gestión de tareas con arquitectura en capas (API REST, persistencia y presentación).",
    tech: "Java, Spring Boot",
  },
  {
    id: "2",
    title: "Biblioteca Académica",
    description:
      "Sistema de gestión de biblioteca académica para administrar préstamos y catálogo de recursos.",
    tech: "Java, Spring Boot",
  },
  {
    id: "3",
    title: "Pokémon Battle",
    description:
      "Juego interactivo de batallas Pokémon con lógica de combate por turnos.",
    tech: "JavaScript",
  },
];