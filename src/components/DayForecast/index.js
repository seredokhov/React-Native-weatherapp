import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TimePoint from '../TimePoint'
import { getDateObjFromDt } from '../../helpers'

const DayForecast = ({ dayForecast }) => {
	const date = getDateObjFromDt(dayForecast.dt)
	return (
		<View>
			<View style={styles.dayInfo}>
				<Text style={[styles.text, styles.textBold]}>{date.day}</Text>
				<Text style={[styles.text]}>{`${date.date} ${date.month}`}</Text>
			</View>
			{
				dayForecast.forecasts.map((forecast, idx) => (
					<TimePoint key={idx} forecast={forecast} />
				))
			}
		</View>
	)

}

const styles = StyleSheet.create({
	container: {

	},
	dayInfo: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 5,
		paddingVertical: 20
	},
	text: {
		paddingHorizontal: 5,
		color: '#fff',
		fontSize: 25
	},
	textBold: {
		color: '#fff',
		fontWeight: 'bold'
	},
	header: {
	}
})

export default DayForecast