import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { icons } from '../../icons'
import { Ionicons } from '@expo/vector-icons';
import { tempConvert } from '../../helpers'

const TimePoint = ({ forecast }) => {
	const temp = tempConvert(forecast.temp)
	return (
		<View style={styles.container}>
			<View >
				<View style={styles.rowContainer}>
					<Ionicons name="md-time" style={styles.icon} size={20} color="#fff" />
					<Text style={styles.timeText}>{forecast.time}</Text>
				</View>
				<Text style={styles.smallText}>{forecast.description}</Text>
			</View>

			<View style={styles.rowContainer}>
				<Text style={styles.tempText}>{temp > 0 ? `+${temp}℃` : `${temp}℃`}</Text>
				<Image
					style={{ width: 55, height: 55 }}
					source={icons[forecast.icon]}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		marginVertical: 1,
		marginHorizontal: -1,
		borderWidth: 1,
		borderColor: '#191919',
		backgroundColor: '#000',
		justifyContent: 'space-between'
	},
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	timeText: {
		color: '#fff',
		fontSize: 25,
		fontStyle: 'italic'
	},
	tempText: {
		color: '#fff',
		fontSize: 30,
	},
	smallText: {
		color: '#fff'
	},
	icon: {
		marginRight: 10
	}
})

export default TimePoint