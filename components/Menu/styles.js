import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  icon: {
    color: "white",
  },
  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    textTransform: "uppercase",
  },
  menuRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuTextBox: {
    flexGrow: 1,
  },
  arrowIcon: {
    color: "#4D4D4E",
  },
  subTitle: {
    color: "gray",
    marginLeft: 15,
    fontSize: 14,
  },
});

export default styles;
