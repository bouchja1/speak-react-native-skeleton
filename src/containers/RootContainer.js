// @flow
import React from 'react'

import { Text } from 'react-native'

// components
import { ButtonHonza, Title, ScrollViewHonza } from '../components'

export default class RootContainer extends React.PureComponent<null> {

  _getRandomJolanda() {
    const jolandaOracleArray = [
      'A von hodně trpěl, protože trpěl!',
      'Vás velice postihne velká dědičnost!',
      'Vaše vztahy budou nadále vám dobře kvétat!',
      'To je vysloveně magogie todleto',
      'Nepřepínejte kanela!'
    ];
    alert(jolandaOracleArray[Math.floor(Math.random()*jolandaOracleArray.length)]);
  }

  render() {
    return (
      <ScrollViewHonza>
        <Title color="black">
          No tady sem cigánka Jolanda!
        </Title>

        <Text style={{textAlign: 'center'}}>Klikni obličej pro předpověď...</Text>

        <ButtonHonza onPress={() => this._getRandomJolanda()} />

      </ScrollViewHonza>
    )
  }
}
