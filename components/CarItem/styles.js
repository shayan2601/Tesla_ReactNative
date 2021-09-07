import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "white",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12,
  },
  status: {
    alignItems: "center",
  },
  statusText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 175,
    // position: "absolute",
  },
  controlButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
  },
});

export default styles;
