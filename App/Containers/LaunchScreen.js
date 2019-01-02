import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              CHLA
            </Text>
            <Text style={styles.sectionText}>
              Type II Diabetes App
            </Text>
            <Button
              title="Get Started"
              onPress={() => this.props.navigation.navigate('AvatarScreen')}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
