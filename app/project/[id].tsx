import { projects } from "@/constants/projects";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProjectDetailScreen() {
  const { id } = useLocalSearchParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <View style={styles.container}>
        <Text>Proyecto no encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.tech}>{project.tech}</Text>
      <Text style={styles.description}>{project.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tech: {
    fontSize: 14,
    color: "#777",
    fontStyle: "italic",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});