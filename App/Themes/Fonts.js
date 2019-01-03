import Metrics from './Metrics'

const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 38,
  h2: 30,
  h3: 24,
  h4: 20,
  h5: 17,
  h6: 14,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontWeight: 'bold',
    fontFamily: type.base,
    fontSize: size.h1,
    letterSpacing: 2,
    marginVertical: Metrics.spacingUnit
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
    letterSpacing: 2,
    marginVertical: Metrics.spacingUnit
  },
  h3: {
    fontWeight: 'bold',
    fontFamily: type.base,
    fontSize: size.h3,
    letterSpacing: 2,
    marginVertical: Metrics.spacingUnit
  },
  h4: {
    fontWeight: 'bold',
    fontFamily: type.base,
    fontSize: size.h4,
    letterSpacing: 1.4,
    marginVertical: Metrics.spacingUnit * 0.5
  },
  h5: {
    fontWeight: 'bold',
    fontFamily: type.base,
    fontSize: size.h5,
    letterSpacing: 1.4,
    marginVertical: Metrics.spacingUnit * 0.5
  },
  h6: {
    fontWeight: 'bold',
    fontFamily: type.base,
    fontSize: size.h6,
    letterSpacing: 1.4,
    marginVertical: Metrics.spacingUnit * 0.5
  },
  normal: {
    fontWeight: 'bold',
    fontFamily: type.base,
    fontSize: size.regular,
    letterSpacing: 1.3
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
    letterSpacing: 1.3
  }
}

export default {
  type,
  size,
  style
}
