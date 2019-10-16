import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { Header } from 'react-native-elements'
import Search from '../components/search';
import hospitals from '../data/hospitals'
class TestsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Header
					style={{ flex: 1 }}
					centerComponent={ <Search></Search> }
				></Header>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text>Tests!</Text>
					<TextInput></TextInput>
				</View>
			</View>
		)
	}
}
export default TestsScreen