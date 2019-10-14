import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import TabNavigator from '../tabs/index'
import DetailsScreen from '../screens/details'

const RootStack = createStackNavigator({
	Home: {
		screen: TabNavigator,
		navigationOptions: {
			header: null
		}
	},
	Details: {
		screen: DetailsScreen,
		navigationOptions: {
			title: 'Details'
		}
	}
})

export default createAppContainer(RootStack)