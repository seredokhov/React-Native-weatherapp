import React from 'react'
import { FlatList } from 'react-native'
import DayForecast from '../DayForecast'

const ForecastList = ({ dailyForecast }) => {
	return (
		<FlatList
			data={dailyForecast}
			keyExtractor={(item) => item.dateStr}
			renderItem={({ item }) => <DayForecast dayForecast={item} />}
		/>
	)
}

export default ForecastList