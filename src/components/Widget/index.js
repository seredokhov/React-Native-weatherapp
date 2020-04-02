import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { icons } from '../../icons'
import MainPanel from './MainPanel'
import PanelList from './PanelList'
import { windConvert, pressureConvert } from '../../helpers'

const Widget = ({ weatherList }) => {
	const city = weatherList.name
	const icon = weatherList.weather[0].icon
	const temp = weatherList.main.temp
	const description = weatherList.weather[0].description

	const data = [
		{
			title: 'Облачность',
			value: weatherList.clouds.all + ' %'
		},
		{
			title: 'Влажность',
			value: weatherList.main.humidity + ' %'
		},
		{
			title: 'Давление',
			value: pressureConvert(weatherList.main.pressure) + ' мм.рт.ст'
		},
		{
			title: 'Скорость ветра',
			value: weatherList.wind.speed + ' м/с'
		},
		{
			title: 'Направление ветра',
			value: windConvert(weatherList.wind.deg)
		},
	]

	return (
		<View>
			<Text style={styles.cityName}>{city}</Text>
			<MainPanel img={icons[icon]} temp={temp} description={description} />
			<PanelList data={data} />
		</View>
	)
}

const styles = StyleSheet.create({
	cityName: {
		fontSize: 40,
		fontWeight: '700',
		textAlign: 'center',
		color: '#fff'
	}
})

export default Widget