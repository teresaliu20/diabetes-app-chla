import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingVertical: Metrics.spacingUnit,
      backgroundColor: Colors.background
    },
    section: {
      paddingVertical: Metrics.spacingUnit * 2,
      paddingHorizontal: Metrics.spacingUnit * 2
    },
    sectionText: {
      ...Fonts.style.h4,
      color: Colors.white,
    },
    sectionTitle: {
      ...Fonts.style.h2,
      color: Colors.text,
    },
    subtitle: {
      ...Fonts.style.h2,
      color: Colors.text,
      textTransform: 'uppercase'
    },
    title: {
      ...Fonts.style.h1,
      fontSize: 48,
      color: Colors.text,
      textTransform: 'uppercase'
    },
    button: {
      backgroundColor: Colors.white,
      color: Colors.backgroundColor,
      textAlign: 'center',
      padding: Metrics.spacingUnit * 0.5,
      marginVertical: Metrics.spacingUnit 
    },
    buttonText: {
      textAlign: 'center',
      ...Fonts.style.h4,
    },
    sectionTitle: {
      ...Fonts.style.h3,
      color: Colors.white,
      padding: Metrics.smallMargin,
      marginTop: Metrics.smallMargin,
      marginHorizontal: Metrics.spacingUnit,
      alignItems: 'center',
      textAlign: 'center'
    },
    darkLabel: {
      color: Colors.coal,
    },
    pinkLabel: {
      color: Colors.pink,
    },
    blueLabel: {
      color: Colors.blue,
    },
    lightBlueBackground: {
      backgroundColor: Colors.lightBlue
    },
    pinkBackground: {
      backgroundColor: Colors.pink,
    },
    groupContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1
    },
    groupItem: {
      flex: 1,
      marginHorizontal: Metrics.spacingUnit * 0.5,
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.spacingUnit * 2,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.spacingUnit
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.spacingUnit,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
