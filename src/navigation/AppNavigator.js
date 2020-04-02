import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ForecastScreen from '../screens/ForecastScreen';
import MapScreen from '../screens/MapScreen';
import CitiesScreen from '../screens/CitiesScreen';

const HomeStack = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		Forecast: {
			screen: ForecastScreen,
			navigationOptions: ({ navigation }) => ({
				title: `${navigation.getParam('city')} прогноз`,
				headerTintColor: '#fff',
				headerStyle: {
					backgroundColor: '#000'
				},
			})
		}
	}
);

const AppNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeStack,
			navigationOptions: {
				title: 'Главная'
			}
		},
		Cities: {
			screen: CitiesScreen,
			navigationOptions: {
				title: 'Города'
			}
		},
		Map: {
			screen: MapScreen,
			navigationOptions: {
				title: 'Карта'
			}
		},
	},
	{
		tabBarOptions: {
			style: {
				backgroundColor: '#000',
				borderTopColor: '#191919'
			},
			tabStyle: {
				paddingBottom: 15,
				borderColor: 'red'
			},
			labelStyle: {
				fontSize: 15
			},
			activeTintColor: '#fff',
		}
	}

);

export default createAppContainer(AppNavigator);
