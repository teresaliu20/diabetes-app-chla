import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AvatarScreenStyle'

class AvatarScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View
            style={styles.section}>
            <Text style={styles.sectionTitle}>
              Choose An Avatar
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('LaunchScreen')}>
              <Text
                style={styles.buttonText}>
                Go Back
              </Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(AvatarScreen)
