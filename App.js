import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import TabNavigator from './tabs/index'
import RootStack from './layout/root'

export default function App() {
  return (
		<View style={styles.container}>
      <RootStack></RootStack>
      {/* <Header centerComponent={{ text: 'MAIN', style: { color: '#fff' } }}></Header> */}
			{/* <Text>Hello world!</Text> */}
      {/* <TabNavigator></TabNavigator> */}
		</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});