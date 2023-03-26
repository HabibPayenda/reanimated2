import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'

import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';


export default function ReanimatedBasics() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const SIZE = 100;

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }, { rotate: `${progress.value * 2 * Math.PI}rad` }],
      borderRadius: progress.value * SIZE / 2
    }
  }, [])

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5, { duration: 1000 }), 5, true);
    scale.value = withRepeat(withSpring(2), 5, true);
  }, [])
  return (
    <View style={styles.container}>
      <Animated.View style={[{ width: SIZE, height: SIZE, backgroundColor: 'blue' }, reanimatedStyle]} />
    </View>
  )
}

const styles = StyleSheet.create({})