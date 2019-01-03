import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/UserProfileScreenStyle'

class UserProfileScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View
            style={[styles.welcomeBanner, styles.section, styles.groupContainer]}>
            <Text style={[styles.sectionTitle, styles.darkLabel, styles.groupItem]}>
              Welcome Kylie!
            </Text>
            <View
              style={[styles.groupItem, styles.imageWrapper]}>
            </View>
          </View>
          <View
            style={[styles.section, styles.lightBlueBackground]}
            >
            <Text style={styles.sectionText}>
              You are currently on:
            </Text>
            <Text style={styles.subtitle}>
              Level 1
            </Text>
            <Text style={styles.sectionText}>
              Your average star score is:
            </Text>
            <Text style={styles.subtitle}>
              3 Stars
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('MapLevelsScreen')}>
              <Text
                style={styles.buttonText}>
                Next
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen)
