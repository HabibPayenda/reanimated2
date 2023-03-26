import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'

const SIZE = 100;
const CIRCLE_RADIUS = SIZE * 2;

export default function PanGestureHandlerAnimation() {

  const trnaslateX = useSharedValue(0);
  const trnaslateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (e, ctx) => {
      ctx.x = trnaslateX.value;
      ctx.y = trnaslateY.value;
    },
    onActive: (e, ctx) => {
      trnaslateX.value = e.translationX + ctx.x;
      trnaslateY.value = e.translationY + ctx.y;
    },
    onEnd: (e, ctx) => {
      const distance = Math.sqrt(trnaslateX.value ** 2 + trnaslateY.value ** 2);
      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        trnaslateX.value = withSpring(0);
        trnaslateY.value = withSpring(0)
      }
    }
  })

  const animateStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: trnaslateX.value}, { translateY: trnaslateY.value }]
    }
  })

  return (
    <View style={{flex: 1, width: 400, alignItems: 'center', justifyContent: "center"}}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, animateStyles]} />
        </PanGestureHandler>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'blue',
  },
  circle: {
    height: CIRCLE_RADIUS * 2,
    width: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'blue'
  }
})