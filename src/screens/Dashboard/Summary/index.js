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

export default function Summary({ userData }) {
	console.log(userData)
	return (<Container>
		<Header back={false} />
		<Box jc="flex-start" pl="12px" pr="12px">
			<SummaryItem
				headingText="Days"
				labelText="17/19"
				subText="You have recorded 17 dasys since the first day" 
			/>
			<SummaryItem
				headingText="Hottest Day"
				labelText="39°"
				subText="Sun Jan 12, 2021" 
			/>
			<SummaryItem
				headingText="Coldest Day"
				labelText="21°"
				subText="Mon Jan 1, 2021" 
			/>
		</Box>
	</Container >
	)
}