import { StyleSheet, Text, View } from 'react-native'
import PanGestureHandlerAnimation from './Animations/PanGestureHandlerAnimation'
import ReanimatedBasics from './Animations/ReanimatedBasics'


export default function StructureComponent({title}) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.animationContainer}> 
        <PanGestureHandlerAnimation />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "space-between",
    flex: 1,
  },
  animationContainer: {
    alignItems: "center",
    justifyContent: 'center',
    flex: 1,
    width: 400
  }
})