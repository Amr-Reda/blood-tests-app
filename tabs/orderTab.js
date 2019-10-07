import React from 'react'
import { Text, View } from 'react-native'
import { Header } from 'react-native-elements'

class OrderScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Header centerComponent={{ text: 'ORDER', style: { color: '#fff' } }}></Header>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text>Order!</Text>
				</View>
			</View>
		)
	}
}
export default OrderScreen