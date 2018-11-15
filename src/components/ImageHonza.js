// @flow
import React from "react"
import { Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    borderRadius: 100,
    backgroundColor: 'steelblue',
    marginTop: 30,
  },
})

type Props = {
  source: string,
}

export default class ImageHonza extends React.PureComponent<Props> {
  render() {
    const { source } = this.props
    return (
      <Image style={styles.image} source={source}/>
    )
  }
}
