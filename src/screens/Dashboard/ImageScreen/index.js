import * as React from 'react';
import { Box } from '../../../styled-components/View';
import { FgImage } from '../../../styled-components/Image';
import Container from '../../../components/Container';
import Header from '../../../components/Header';

export default function ImageScreen({ navigation, route }) {
	const { imageSrc } = route.params;
	return (<Container>
		<Header back={true} navigation={navigation} />
		<Box>
			<FgImage height="100%" width="100%" source={{ uri: imageSrc }} />
		</Box>
	</Container >
	)
}