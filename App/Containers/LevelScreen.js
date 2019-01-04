import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import playImage from '../Assets/play.png';
import questionImage from '../Assets/question.png';
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
              {
                levelObj.challenges.map(challenge => {
                  if (challenge.type === "video") {
                    return (<View
                              style={styles.circleButtonWrapper}>
                              <TouchableOpacity
                                style={[styles.circleButton, styles.blueBackground]}
                                onPress={() => this.props.navigation.navigate('VideoScreen', { "challenge": challenge })}>
                                <Image source={playImage}/>
                              </TouchableOpacity>
                              <Text
                                style={styles.sectionText}>
                                { challenge.name }
                              </Text>
                            </View>)
                  }
                  else {
                    return (<View
                              style={styles.circleButtonWrapper}>
                              <TouchableOpacity
                                style={[styles.circleButton, styles.pinkBackground]}
                                onPress={() => this.props.navigation.navigate('QuestionScreen', { "challenge": challenge })}>
                                <Image source={questionImage}/>
                              </TouchableOpacity>
                              <Text
                                style={styles.sectionText}>
                                { challenge.name }
                              </Text>
                            </View>)
                  }
                })
              }
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.goBack()}>
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
                onPress={() => this.props.navigation.goBack()}>
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
