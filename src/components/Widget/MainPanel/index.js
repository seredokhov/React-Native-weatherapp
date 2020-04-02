import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { tempConvert } from '../../../helpers'

const MainPanel = ({ img, temp, description }) => {
	const cels = tempConvert(temp);
	return (
		<View>
			<Text style={styles.description}>{description}</Text>
			<View style={styles.container}>
				<Text style={styles.temp}>
					{cels > 0 ? `+${cels}℃` : `${cels}℃`}
				</Text>
				<Image
					style={{ width: 100, height: 100 }}
					source={img}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		justifyContent: 'center'
	},
	description: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center'
	},
	temp: {
		color: '#fff',
		fontSize: 35
	}
})

export default MainPanel
