import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/profile.jpg")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Danny Roman</Text>
      <Text style={styles.title}>
        Ingeniero de Infraestructura & Desarrollador Móvil en Formación
      </Text>
      <Text style={styles.bio}>
        20+ años en tecnología —desde soporte técnico hasta infraestructura
        cloud— ahora enfocado en desarrollo de aplicaciones móviles.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
    color: "#555",
  },
  bio: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    lineHeight: 20,
  },
});