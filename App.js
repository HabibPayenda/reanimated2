import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedBasics from './Animations/ReanimatedBasics';
import SvgComponent from './src/components/svg';
import StructureComponent from './SturctureComponent';

const height = Dimensions.get('window').height;
export default function App() {

  return (
    <>
      <StatusBar style='dark' />
      <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Reanimated</Text>
        </View>
        <View style={styles.animationView}>
          {/* <StructureComponent  title='Pan Gesture Handler' /> */}
          <SvgComponent />
        </View>
      </View>
      </GestureHandlerRootView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    height: height - 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animationView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 2,
    width: 400
  },
  title: {
    fontSize: 26,
    color: 'blue',
  }
});
