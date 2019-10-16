import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class search extends Component {
    render() {
        return (
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#fff',
					width: '125%',
					height: 40,
					borderRadius: 20,
					margin: 10
				}}
			>
				<Icon
					name='ios-search'
					color='#f2f2f2'
					size={24}
					style={{
						padding: 10,
						margin: 5,
						alignItems: 'center'
					}}
				/>
				<TextInput
					placeholder='Search for Lab'
					style={{
						flex: 1,
						paddingRight: 10,
						fontSize: 20
					}}
				></TextInput>
			</View>
		)
    }
}
