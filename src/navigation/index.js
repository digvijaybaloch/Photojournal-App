import * as React from "react";
// import * as Updates from 'expo-updates';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationService from "./NavigationService";
import CustomTabBar from "../components/TabBar";
import Home from "../containers/Dashboard/Home";
import Summary from "../containers/Dashboard/Summary";
import NewPost from "../containers/Dashboard/NewPost";
import ImageScreen from "../containers/Dashboard/ImageScreen";
import FeedDetail from "../containers/Dashboard/Home/FeedDetail";
import { P } from "../styled-components/Text";
import { View } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
	return (
		<Tab.Navigator initialRouteName="Home" tabBar={props => <CustomTabBar {...props} />} tabBarOptions={{
			inactiveTintColor: "gray", showLabel: false, keyboardHidesTabBar: true
		}}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Summary" component={Summary} />
		</Tab.Navigator>
	);
}

function AppNavigator({ onboarding,	name,	meta,	dispatch }) {
	const [initialNavigationState, setInitialNavigationState] = React.useState();
	const [updateAvail, setUpdateAvail] = React.useState(false);
	const containerRef = React.useRef();
	// const { getInitialState } = useLinking(containerRef);
	React.useEffect(() => {
		const bootstrapAsync = () => {
			dispatch({
				type: "RESTORE_TOKEN",
			});
		};
		// async function checkForUpdates() {
		// 	try {
		// 		const update = await Updates.checkForUpdateAsync();
		// 		if (update.isAvailable) {
		// 			setUpdateAvail(true)
		// 		}
		// 	} catch (e) {
		// 	}
		// }
		// checkForUpdates()
		bootstrapAsync();
	}, []);

	return (<>
		<NavigationContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef); }} initialState={initialNavigationState} >
			<Stack.Navigator headerMode={false} screenOptions={() => ({ gestureEnabled: false, cardOverlayEnabled: false, ...TransitionPresets.SlideFromRightIOS, })}			>
				<Stack.Screen name="Dashboard" component={Dashboard} />	
				<Stack.Screen name="NewPost" component={NewPost} options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, }} />
				<Stack.Screen name="ImageScreen" component={ImageScreen} />	
				<Stack.Screen name="FeedDetail" component={FeedDetail} />	

				{/* {!updateAvail ? (authenticated ? (
					onboarding ? (
						<>
							<Stack.Screen name="Dashboard" component={Dashboard} />							
						</>
					) : (
							<>
								{name ? (<>
								{meta && meta.title ?
								<>
									<Stack.Screen name="EnterAgencyName" component={EnterAgencyName} />
									<Stack.Screen name="SetupAgencyProfile" component={SetupAgencyProfile} />
									<Stack.Screen name="SetupAgencySuccessful" component={SetupAgencySuccessful} />
									<Stack.Screen name="InviteOnboarding" component={InviteOnboarding} />
									</>:
									<Stack.Screen name="EnterOccupation" component={EnterOccupation} />
								}
								</>) : (
										<Stack.Screen name="EnterName" component={EnterName} />
									)}
							</>
						)
				) : (
						<>
							<Stack.Screen name="Landing" component={LandingScreen} />
							<Stack.Screen name="EnterNumber" component={EnterNumber} />
							<Stack.Screen name="EnterCode" component={EnterCode} />
						</>
					)) : <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
				} */}
			</Stack.Navigator>
		</NavigationContainer>
		{/* { networkError && <View style={{ height: 30, width: "100%", alignItems: "center", justifyContent: 'center', position: 'absolute', backgroundColor: 'red'}}><P color="#FFF">Network Error</P></View>} */}
	</>);
}

const mapStateToProps = state => ({
	onboarding:  0,
	name: "",
	meta: null,
});

const mapDispatchToProps = dispatch => ({
	dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
