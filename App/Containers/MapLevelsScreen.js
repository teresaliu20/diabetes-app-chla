import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import levelsData from '../Data/levels.json';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MapLevelsScreenStyle'

class MapLevelsScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View
            style={styles.section}>
            <Text style={styles.sectionTitle}>
              Map Of Levels
            </Text>
            {
              levelsData.map(level => (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('LevelScreen', { level: level })}>
                  <Text
                    style={styles.buttonText}>
                    {level.name}
                  </Text>
                </TouchableOpacity>))
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapLevelsScreen)
