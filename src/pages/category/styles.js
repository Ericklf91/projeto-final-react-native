import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  list: {
    paddingHorizontal: 20,
  },
  listItem: {
    backgroundColor: '#EEE',
    marginTop: 5,
    padding: 10,
    borderRadius: 10,
  },
  view: {
    marginBottom: 20,
  },
  dialogButton: {
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
  },
  button: {
    borderRadius: 1,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  img: {
    width: 300, 
    height: 150,
  },
  title: {
    textAlign: 'center'
  }
});

export default styles;