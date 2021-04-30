import { Paper, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { MenuContent } from './MenuContent.type'

type MemuProps = {
	items: MenuContent[]
}

export const Menu: React.FC<MemuProps> = (props: MemuProps) => {
	const { items } = props
	const [currentIndex, setCurrentIndex] = React.useState(0)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentIndex(newValue);
	};

	return (
		<Paper square>
      <Tabs value={currentIndex} onChange={handleChange} indicatorColor="primary" textColor="primary">
				{items.map((item:MenuContent) => (
					<Tab label={item.label} component={Link} to={item.path} key={item.label} />
				))}
      </Tabs>
    </Paper>
	)
}