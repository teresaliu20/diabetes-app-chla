import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LevelScreenStyle'

class LevelScreen extends Component {
  render () {
    const levelObj = this.props.navigation.getParam('level', null);
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {levelObj ? 
            (<View>
              <View
              style={styles.section}>
                <Text style={[styles.subtitle, styles.pinkLabel]}>
                  { levelObj.name }
                </Text>
              </View>
              <View
                style={[styles.section, styles.pinkBackground]}>
                <Text style={[styles.sectionText, styles.blueLabel]}>
                  Main Topics:
                </Text>
                <Text style={[styles.sectionText, styles.darkLabel]}>
                  { levelObj.topics }
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('LaunchScreen')}>
                <Text
                  style={styles.buttonText}>
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>)
            :
            (<View
              style={styles.section}>
              <Text style={styles.sectionTitle}>
                Nothing here!
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('LaunchScreen')}>
                <Text
                  style={styles.buttonText}>
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>)
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(LevelScreen)
