import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import * as SQLite from 'expo-sqlite';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import Loader from './src/components/Loader';
import store from './src/store';
import { updateData } from './src/actions/data';

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
 updateData
})

const AppLoader = connect(mapStateToProps, mapDispatchToProps)(ConnectLoader)

export default function App(props) {
 const [isLoadingComplete, setLoadingComplete] = React.useState(false);
 let [fontsLoaded] = useFonts({
  Inter_400Regular, Inter_700Bold, Inter_500Medium
 });
 const db = SQLite.openDatabase("picadaydb.db")
 React.useEffect(()=>{
  db.transaction(tx => {
   tx.executeSql(
    'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, date INTEGER, temperature INT, city TEXT, country TEXT, image TEXT, caption TEXT )'
   )
  })
 },[])
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
