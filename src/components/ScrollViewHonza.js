// @flow
import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import Colors from "../themes/Colors"

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: Colors.background,
  },
})

export default class ScrollViewHonza extends React.PureComponent<null> {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
            {this.props.children}
        </View>
      </SafeAreaView>
    )
  }
}
