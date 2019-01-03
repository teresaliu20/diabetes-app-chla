import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  welcomeBanner: {
  	backgroundColor: Colors.white,
  },
  imageWrapper: {
  	height: 100,
  	backgroundColor: Colors.gray
  },
})
