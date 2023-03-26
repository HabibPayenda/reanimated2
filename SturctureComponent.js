import { StyleSheet, Text, View } from 'react-native'
import PanGestureHandler from './Animations/PanGestureHandler'
import ReanimatedBasics from './Animations/ReanimatedBasics'


export default function StructureComponent({title}) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.animationContainer}> 
        <PanGestureHandler />
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
    flex: 1
  }
})