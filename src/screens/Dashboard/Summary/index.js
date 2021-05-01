import * as React from 'react';
import { Box, Row } from '../../../styled-components/View';
import { Heading, Label, P } from '../../../styled-components/Text';
import { AppInput } from '../../../styled-components/Input';
import { FgImage } from '../../../styled-components/Image';
const { useState, useEffect } = React
import Container from '../../../components/Container';
import { TouchableOpacity, ScrollView, Keyboard, RefreshControl, FlatList, View } from 'react-native';
import NavService from '../../../navigation/NavigationService';
import { SecondaryButton, PrimaryButton } from '../../../styled-components/Button';
import styled from 'styled-components';
import { SvgPicker } from '../../../styled-components/Svg';
import Header from '../../../components/Header';
import SummaryItem from '../../../components/SummaryItem';

const MONTHS = [
 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const DAY = [
 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

export default function Summary({ userData }) {
	const [diffInDays, setDiffInDays] = useState(1)
	const [firstDay, setFirstDay] = useState(new Date().getTime())
	const [hottestDay, setHottestDay] = useState({temperature: 0})
	const [coldestDay, setColdestDay] = useState({temperature: 100})
	const today = new Date().getTime();
	useEffect(()=>{
		setDiffInDays(Math.round((today-firstDay)/(1000*60*60*24)));
	},[firstDay])
	userData.map(item => {
		if(firstDay > item.date){
			setFirstDay(item.date)
		}
	})
	userData.map(item => {
		if(hottestDay.temperature < item.temperature){
			setHottestDay(item)
		}
	})
	userData.map(item => {
		if(coldestDay.temperature > item.temperature){
			setColdestDay(item)
		}
	})
	return (<Container>
		<Header back={false} />
		{userData && userData.length > 0 ? <ScrollView showsVerticalScrollIndicator={false}><Box jc="flex-start" pl="12px" pr="12px">
			<SummaryItem
				headingText="Days"
				labelText={`${userData.length || 0}/${diffInDays+1}`}
				subText={`You have recorded ${userData.length || 0} day(s) since the first day`}
			/>
			<SummaryItem
				headingText="Hottest Day"
				labelText={`${hottestDay.temperature.toFixed(1)}°`}
				subText={`${DAY[new Date(hottestDay.date).getDay()]} ${MONTHS[new Date(hottestDay.date).getMonth()]} ${new Date(hottestDay.date).getDate()}, ${new Date(hottestDay.date).getFullYear()}`}
			/>
			<SummaryItem
				headingText="Coldest Day"
				labelText={`${coldestDay.temperature.toFixed(1)}°`}
				subText={`${DAY[new Date(coldestDay.date).getDay()]} ${MONTHS[new Date(coldestDay.date).getMonth()]} ${new Date(coldestDay.date).getDate()}, ${new Date(coldestDay.date).getFullYear()}`}
			/>
		</Box></ScrollView> : <Box><P>Add pictures to get summary</P></Box>}
	</Container >
	)
}