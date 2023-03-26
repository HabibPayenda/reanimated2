import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

const SIZE = 100;

export default function PanGestureHandler() {
  return (
    <View>
      <Animated.View style={styles.square} />
    </View>
  )
}

const styles = StyleSheet.create({
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'blue'
  }
})