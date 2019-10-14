import React from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import { Card } from 'react-native-elements'

const cards = [
	{
		date: 'Sunday, 26 May 2019',
		test_name: 'Uric acid',
		result: '4.7',
		unit: 'mg/dl',
		reference_interval: '( 3.5 - 7.2 )',
		id: '1'
	},
	{
		date: 'Monday, 15 October 2019',
		test_name: 'Cholestrerol',
		result: '226',
		unit: 'mg/dl',
		reference_interval: 'Normal( Up to 200 )',
		id: '2'
	},
	{
		date: 'Friday, 17 Apr 2019',
		test_name: 'Triglycerides',
		result: '165',
		unit: 'mg/dl',
		reference_interval: '( < 150 )',
		id: '3'
	}
]

const cardStyle = {
	// padding: 0,
	borderRadius: 5,
	backgroundColor: '#f2f2f2'
}

const titleStyle = {
	color: 'grey',
	textAlign: 'left',
	textAlignVertical: 'center',
	marginVertical: 0,
	paddingVertical: 0
}

const testNameTextStyle = { //TODO: add font
	color: 'orange',
	fontWeight: '700',
	fontSize: 20
}

const dividerStyle = { borderWidth: 1, borderColor: '#fff' }
class ResultsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Header centerComponent={{ text: 'RESULTS', style: { color: '#fff' } }}></Header>
				<View style={{ flex: 1 }}>
					<ScrollView style={{ marginBottom: 15 }}>
						{cards.map(card => {
							return (
								<TouchableOpacity
									key={card.id}
									onPress={() => this.props.navigation.navigate('Details')}
								>
									<Card
										containerStyle={cardStyle}
										title={card.date}
										dividerStyle={dividerStyle}
										titleStyle={titleStyle}
									>
										<Text style={testNameTextStyle}>{card.test_name}</Text>
										<View
											style={{
												flexDirection: 'row',
												justifyContent: 'space-between'
											}}
										>
											<Text style={{ fontSize: 16, color: 'grey' }}>
												{card.result}
											</Text>
											<Text style={{ fontSize: 16, color: 'grey' }}>
												{card.unit}
											</Text>
											<Text style={{ fontSize: 16, color: 'grey' }}>
												{card.reference_interval}
											</Text>
										</View>
									</Card>
								</TouchableOpacity>
							)
						})}

						{cards.map(card => {
							return (
								<TouchableOpacity
									key={card.id + 'a'}
									onPress={() => this.props.navigation.navigate('Details')}
								>
									<Card
										containerStyle={cardStyle}
										title={card.date}
										dividerStyle={dividerStyle}
										titleStyle={titleStyle}
									>
										<Text style={testNameTextStyle}>{card.test_name}</Text>
										<View
											style={{
												flexDirection: 'row',
												justifyContent: 'space-between'
											}}
										>
											<Text style={{ fontSize: 16, color: 'grey' }}>
												{card.result}
											</Text>
											<Text style={{ fontSize: 16, color: 'grey' }}>
												{card.unit}
											</Text>
											<Text style={{ fontSize: 16, color: 'grey' }}>
												{card.reference_interval}
											</Text>
										</View>
									</Card>
								</TouchableOpacity>
							)
						})}
					</ScrollView>
				</View>
			</View>
		)
	}
}

export default ResultsScreen
