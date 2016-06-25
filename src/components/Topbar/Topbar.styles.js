import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default {
  container: {
    position: 'absolute',
    top: 0,
    height: 60,
    width: screenWidth,
    backgroundColor: 'rgba(85, 207, 179, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'TrebuchetMS',
    fontSize: 22,
  },
}
