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

export default function FeedDetail({ navigation, route }) {
	const { date,	temperature,	locationData,	photo, caption } = route.params;
	return (<Container>
		<Header back={true} navigation={navigation} />
		<FeedItem date={date} temperature={temperature} locationData={locationData} photo={photo} onPress={()=>navigation.navigate("ImageScreen",{ imageSrc: photo })} />
		<Box mt="25px" pl="25px" pr="25px" jc="flex-start" ai="flex-start">
			<P align="left" size="16px" lh="19px" color="#314743">{caption}</P>
		</Box>
	</Container >
	)
}