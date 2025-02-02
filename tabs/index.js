import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import OrderScreen from './orderTab'
import TestsScreen from './testsTab'
import ResultsScreen from './resultsTab'
import Icon from 'react-native-vector-icons/Ionicons'

const TabNavigator = createMaterialTopTabNavigator(
	{
		Results: {
			screen: ResultsScreen,
			navigationOptions: {
				tabBarLabel: 'Results',
				tabBarIcon: ({ tintColor }) => {
					return <Icon name='ios-filing' color={tintColor} size={24} />
					// <Icon name='ios-archive' color={ tintColor } size={24} />
				}
			}
		},
		Order: {
			screen: OrderScreen,
			navigationOptions: {
				tabBarLabel: 'Your Checks',
				tabBarIcon: ({ tintColor }) => {
					return <Icon name='ios-home' color={tintColor} size={24} />
					// <Icon name='ios-add-circle-outline' color={ tintColor } size={24} />
					// <Icon name='ios-create' color={ tintColor } size={24} />
					// <Icon name='ios-pie' color={ tintColor } size={24} />
				}
			}
		},
		Tests: {
			screen: TestsScreen,
			navigationOptions: {
				tabBarLabel: 'Labs',
				tabBarIcon: ({ tintColor }) => {
					return <Icon name='ios-flask' color={tintColor} size={24} />
				}
			}
		}
	},
	{
		initialRouteName: 'Tests',
		tabBarPosition: 'bottom',
		tabBarOptions: {
			activeTintColor: 'orange',
			inactiveTintColor: 'grey',
			style: {
				backgroundColor: '#f2f2f2'
			},
			showIcon: true
		}
	}
)

export default createAppContainer(TabNavigator)
