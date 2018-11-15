// @flow
import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'

import { ImageHonza } from "./index"

type Props = {|
  +onPress: () => void,
|}

export default class ButtonHonza extends React.PureComponent<Props> {
  render() {
    const { onPress } = this.props
    return (
      <View>
        <TouchableHighlight
          onPress={onPress}
        >
          <ImageHonza
            source={require('../../assets/jolanda.jpeg')}
            resizeMode="cover"
          />
        </TouchableHighlight>
      </View>
    )
  }
}
