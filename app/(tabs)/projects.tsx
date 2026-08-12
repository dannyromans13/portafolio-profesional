import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/constants/projects";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function ProjectsScreen() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis Proyectos</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar proyecto..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredProjects}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ProjectCard project={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  list: {
    gap: 12,
  },
});