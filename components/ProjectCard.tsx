import { Project } from "@/constants/projects";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`} asChild>
      <Pressable style={styles.card}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <Text style={styles.tech}>{project.tech}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 14,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 6,
  },
  tech: {
    fontSize: 12,
    color: "#777",
    fontStyle: "italic",
  },
});