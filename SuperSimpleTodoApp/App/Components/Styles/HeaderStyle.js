import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed'
  },
  title: {
    position: 'absolute',
    top: 15,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 24,
    color: '#000'
  },
  icon: {
    paddingHorizontal: 25,
    paddingVertical: 15
  },
  placeholder: {
    width: 34,
    height: 34,
    backgroundColor: 'transparent'
  }
})
