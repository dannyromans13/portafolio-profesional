import { projects } from "@/constants/projects";
import { Link } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
        renderItem={({ item }) => (
          <Link href={`/project/${item.id}`} asChild>
            <Pressable style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <Text style={styles.cardTech}>{item.tech}</Text>
            </Pressable>
          </Link>
        )}
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
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 14,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#444",
    marginBottom: 6,
  },
  cardTech: {
    fontSize: 12,
    color: "#777",
    fontStyle: "italic",
  },
});