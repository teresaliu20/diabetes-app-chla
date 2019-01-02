import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, Button } from 'react-native'
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
          <KeyboardAvoidingView behavior='position'>
            <Text style={styles.sectionText}>
              Choose An Avatar
            </Text>
            <Button
              title="Back"
              onPress={() => this.props.navigation.navigate('LaunchScreen')}
            />
          </KeyboardAvoidingView>
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
