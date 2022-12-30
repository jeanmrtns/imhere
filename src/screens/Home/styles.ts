import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#1F1E25',
    color: '#FDFCFE',
    borderRadius: 5,
    marginRight: 12,
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyList: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
});