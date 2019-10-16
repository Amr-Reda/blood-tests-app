import React from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native'
import { Header, Card } from 'react-native-elements'
import Search from '../components/search';
import Icon from 'react-native-vector-icons/Ionicons'
import hospitals from '../data/hospitals'

const cardStyle = {
	// padding: 0,
	borderRadius: 5,
	backgroundColor: '#dbdbdb',
	alignSelf: 'stretch'
}
class TestsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Header style={{ flex: 1 }} centerComponent={<Search></Search>}></Header>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', }}>
					<ScrollView style={{ marginBottom: 15, flex: 1, alignSelf: 'stretch' }}>
						{hospitals.map(hospital => {
							return (
								// <TouchableOpacity
								// 	key={card.id}
								// 	onPress={() => this.props.navigation.navigate('Details')}
								// >
								<Card
									key={hospital.id}
									containerStyle={cardStyle}
									wrapperStyle={{
										flex: 1,
										alignSelf: 'stretch'
									}}
									// title={card.date}
									// dividerStyle={dividerStyle}
									// titleStyle={titleStyle}
								>
									<View
										style={{
											flex: 1,
											alignItems: 'center',
											justifyContent: 'center',
											padding: 20
										}}
									>
										<Text style={{ fontSize: 20 }}>{hospital.name}</Text>
										<Text style={{ fontSize: 15 }}>
											{hospital.branchs[1].address}
										</Text>
									</View>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingHorizontal: 15
										}}
									>
										<View style={{ flexDirection: 'row' }}>
											<Icon
												name='ios-heart'
												color='orange'
												size={18}
												style={{
													marginRight: 4
												}}
											/>
											<Text style={{ color: 'grey' }}>{hospital.likes}</Text>
										</View>
										<View style={{ flexDirection: 'row' }}>
											<Icon
												name='ios-pin'
												color='orange'
												size={18}
												style={{
													marginRight: 4
												}}
											/>
											<Text style={{ color: 'grey' }}>
												{hospital.branchs[1].distance}
											</Text>
										</View>
										<View style={{ flexDirection: 'row' }}>
											<Icon
												name='ios-call'
												color='orange'
												size={18}
												style={{
													marginRight: 4
												}}
											/>
											<Text style={{ color: 'grey' }}>
												{hospital.branchs[1].phone}
											</Text>
										</View>
									</View>
								</Card>
								// </TouchableOpacity>
							)
						})}
					</ScrollView>
				</View>
			</View>
		)
	}
}
export default TestsScreen