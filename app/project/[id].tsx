import { projects } from "@/constants/projects";
import { Ionicons } from "@expo/vector-icons";
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
      <View style={styles.iconWrapper}>
        <Ionicons name="code-slash" size={48} color="#2f6feb" />
      </View>

      <Text style={styles.title}>{project.title}</Text>

      <View style={styles.techBadge}>
        <Text style={styles.techText}>{project.tech}</Text>
      </View>

      <Text style={styles.sectionLabel}>Descripción</Text>
      <Text style={styles.description}>{project.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  iconWrapper: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#eaf1ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  techBadge: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 24,
  },
  techText: {
    fontSize: 13,
    color: "#555",
    fontWeight: "600",
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "#888",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    textAlign: "left",
    alignSelf: "stretch",
  },
});