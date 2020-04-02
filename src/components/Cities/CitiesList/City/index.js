import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const City = ({ city, onChange }) => {
	const { name, city_id: index } = city
	return (
		<TouchableOpacity
			style={[styles.container]}
			onPress={() => onChange(index, name)}
		>
			<Text style={styles.text}>{name}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
		borderBottomWidth: 1,
		borderColor: '#191919',
	},
	active: {
		backgroundColor: 'red'
	},
	disabled: {
		backgroundColor: '#090909'
	},
	text: {
		fontSize: 16,
		fontStyle: 'italic',
		color: '#fff'
	}
})

export default City