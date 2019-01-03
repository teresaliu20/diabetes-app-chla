import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.title}>
              CHLA
            </Text>
            <Text style={styles.subtitle}>
              Type II Diabetes Game
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('UserProfileScreen')}>
              <Text
                style={styles.buttonText}>
                Get Started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('AvatarScreen')}>
              <Text
                style={styles.buttonText}>
                Choose Avatar
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
