import { createStackNavigator, createAppContainer } from 'react-navigation'
import VideoScreen from '../Containers/VideoScreen'
import QuestionScreen from '../Containers/QuestionScreen'
import LevelScreen from '../Containers/LevelScreen'
import MapLevelsScreen from '../Containers/MapLevelsScreen'
import UserProfileScreen from '../Containers/UserProfileScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import AvatarScreen from '../Containers/AvatarScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  VideoScreen: { screen: VideoScreen },
  QuestionScreen: { screen: QuestionScreen },
  LevelScreen: { screen: LevelScreen },
  MapLevelsScreen: { screen: MapLevelsScreen },
  UserProfileScreen: { screen: UserProfileScreen },
  AvatarScreen: { screen: AvatarScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
