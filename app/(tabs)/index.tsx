import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={indexStyles.container}>
      <Text>A Barcode Scanner for books and retail items</Text>
      <Link style={indexStyles.linkText} href="/scan">Scan Barcodes</Link>
    </View>
  );
}

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 2,
    paddingLeft: 2,
    backgroundColor: '#a8dbf3',
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    backgroundColor: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    padding: 4
  }
});