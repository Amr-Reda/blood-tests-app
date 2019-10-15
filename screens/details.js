import * as React from 'react'
import { View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'

const cardStyle = {
	flex: 1,
	borderBottomLeftRadius: 25,
	borderBottomRightRadius: 25,
	marginBottom: 25,
	justifyContent: 'space-between',
	flexDirection: 'column'
}
class DetailsScreen extends React.Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: '#f2f2f2'
				}}
			>
				<Card
					containerStyle={{
						flex: 1,
						borderBottomLeftRadius: 25,
						borderBottomRightRadius: 25,
						marginBottom: 25
					}}
					wrapperStyle={{ 
						flex: 1, 
						justifyContent: 'space-between'
					}}
				>
					<View>
						<Text>Name: Amr Reda</Text>
						<Text>Referred by: Dr.Ahmed Ali</Text>
						<Text>Age: 55</Text>
						<Text>Sex: Male</Text>
						<Text>Request Date: 01/11/2018 10:36</Text>
						<Text>Printing Date: 01/11/2018 14:55</Text>
						<View
							style={{
								borderBottomColor: 'black',
								borderBottomWidth: 1,
								marginVertical: 5
							}}
						/>
						<Text style={{ textAlign: 'center' }}>REPORT</Text>
						<View
							style={{
								flexDirection: 'row',
								borderStyle: 'solid',
								borderWidth: 1,
								borderColor: 'black',
								// justifyContent: 'space-between',
								margin: 10,
								paddingHorizontal: 2,
								alignItems: 'center'
							}}
						>
							<Text style={{ flex: 1 }}>Test</Text>
							<Text style={{ flex: 1 }}>Result</Text>
							<Text style={{ flex: 1 }}>Unit</Text>
							<Text style={{ flex: 1 }}>Reference Interval</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								// justifyContent: 'space-between',
								margin: 5,
								paddingHorizontal: 5
							}}
						>
							<Text style={{ flex: 1 }}>Uric acid</Text>
							<Text style={{ flex: 1 }}>407</Text>
							<Text style={{ flex: 1 }}>mg/dl</Text>
							<Text style={{ flex: 1 }}>( 3.5 - 7.2 )</Text>
						</View>
					</View>
					<View>
						<Button
							title='Save as PDF'
							containerStyle={{
								// backgroundColor: 'red'
							}}
							buttonStyle={{
								backgroundColor: 'red',
								borderRadius: 25
							}}
						></Button>
					</View>
				</Card>

				{/* <Button
					title='Go to Details... again'
					onPress={() => this.props.navigation.push('Details')}
				/>
				<Button title='Go to Home' onPress={() => this.props.navigation.navigate('Home')} />
				<Button title='Go back' onPress={() => this.props.navigation.goBack()} /> */}
			</View>
		)
	}
}
export default DetailsScreen
