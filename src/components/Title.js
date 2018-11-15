// @flow
import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Colors from "../themes/Colors"

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
    color: Colors.primary,
  },
})

type Props = {
  children: string,
  color: string,
}

export default class Title extends React.PureComponent<Props> {
  render() {
    const { children, color} = this.props;
    // we can override style
    return (
      <Text style={[styles.title, {color}]}>
        {children}
      </Text>
    )
  }
}
