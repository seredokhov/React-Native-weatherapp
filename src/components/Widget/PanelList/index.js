import React, { Fragment } from 'react'
import Panel from '../Panel'

const PanelList = ({ data }) => {
	return (
		<Fragment>
			{
				data.map((elem, idx) => (
					<Panel key={idx} data={elem} />
				))
			}
		</Fragment>
	)
}

export default PanelList