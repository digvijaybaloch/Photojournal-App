import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import store from './src/store';
import { connect } from 'react-redux';
import Loader from './src/components/Loader';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';

const ConnectLoader = ({ loading }) => {
 return (
 <SafeAreaProvider>
  <View style={styles.container}>
   {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
   <Loader loading={loading} />
   <AppNavigator />
   </View>
  </SafeAreaProvider>
 )
}

const mapStateToProps = (state) => ({
 loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
})

const AppLoader = connect(mapStateToProps, mapDispatchToProps)(ConnectLoader)

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  let [fontsLoaded] = useFonts({
   Inter_400Regular, Inter_700Bold, Inter_500Medium
 });
  // React.useEffect(() => {
  //   async function loadResourcesAndDataAsync() {
  //     try {
  //       SplashScreen.preventAutoHideAsync();
  //       // Load fonts
        
  //     } catch (e) {
  //       // We might want to provide this error information to an error reporting services
  //       console.warn(e);
  //     } finally {
  //       setLoadingComplete(true);
  //       SplashScreen.hideAsync();
  //     }
  //   }

  //   loadResourcesAndDataAsync();
  // }, []);

  if (!fontsLoaded) {
   return null;
  } else {
   return (
   <Provider store={store} >
    <AppLoader />
   </Provider>
  );
 }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  height: Dimensions.get('window').height,
 },
});
