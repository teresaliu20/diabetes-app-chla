import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Alert, Modal ,TouchableHighlight} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/QuestionScreenStyle'


class QuestionScreen extends Component {

  state = {
    modalVisible: false,
    modalWin: false,
    modalText: "",
    modalButtonText: ""
  }

  openWinningModal = () => {
    this.setState({
      modalVisible: true,
      modalWin: true,
      modalText: "You Won!",
      modalButtonText: "Congrats, go back"
    })
  }

  openLosingModal = () => {
    this.setState({
      modalVisible: true,
      modalWin: false,
      modalText: "You Lost!",
      modalButtonText: "Try Again"
    })
  }

  exitModal = () => {
    if (this.state.modalWin) {
      this.setState({modalVisible: false})
      this.props.navigation.goBack()
    }
    else {
      this.setState({modalVisible: false})
    }
  }


  render () {
    const challengeObj = this.props.navigation.getParam('challenge', null);
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={[styles.container, styles.pinkBackground]}>
          <View
            style={styles.section}>
            <Text style={[styles.sectionTitle, styles.darkLabel]}>
              { challengeObj.question }
            </Text>
            {
              challengeObj.choices.map(choice =>
                (<TouchableOpacity
                  style={[styles.button, styles.darkBackground]}
                  onPress={() => {
                    if (challengeObj.correctChoice === choice) {
                      this.openWinningModal();
                    }
                    else {
                      this.openLosingModal();
                    }
                  }}>
                  <Text
                    style={styles.sectionTitle}>
                    {choice}
                  </Text>
                </TouchableOpacity>))
            }
            <View>
              <Modal
                animationType="slide"
                transparent
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setState({modalVisible: false});
                }}>
                <View style={styles.groupContainer}>
                  <View style={[styles.modalContainer, styles.section]}>
                    <Text
                      style={[styles.sectionTitle, styles.darkLabel]}>
                      {this.state.modalText}
                    </Text>
                    <TouchableOpacity
                      style={[styles.button, styles.darkBackground]}
                      onPress={() => this.exitModal()}>
                      <Text
                        style={styles.sectionTitle}>
                        {this.state.modalButtonText}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.goBack()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
