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
import FeedItem from '../../../components/FeedItem';

export default function Home({}) {
	let locDate = new Date().getTime()
	return (<Container>
		<Header back={false} />
		<ScrollView showsVerticalScrollIndicator={false}>
			<FeedItem temperature={30.7} locationData={{city: "Jodhpur", Country: "in"}} photo=""
			 onPress={()=>NavService.navigate("FeedDetail",{
				date: locDate,	locationData: { city: "Jodhpur", country: "India" },		photo:"", temperature: 37, caption: "Another awesome morning. I can’t live a day without coffee."
			})}/>
		</ScrollView>
	</Container >
	)
}