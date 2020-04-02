import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Panel = ({ data }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.textBold]}>{data.title}</Text>
			<Text style={styles.text}>{data.value}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		backgroundColor: '#000',
		borderBottomColor: '#191919',
		paddingHorizontal: 5,
		marginBottom: 3
	},
	text: {
		flex: 1,
		fontSize: 15,
		color: '#fff',
		paddingHorizontal: 5,
		paddingVertical: 5,
	},
	textBold: {
		fontWeight: 'bold',
		fontStyle: 'italic'
	},
})

export default Panel