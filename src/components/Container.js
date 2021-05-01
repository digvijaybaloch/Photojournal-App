import { useSafeAreaInsets  } from 'react-native-safe-area-context';
import * as React from 'react'
import { View, StatusBar } from 'react-native';

export default function Container({ children }) {
 const insets = useSafeAreaInsets();
 return (
  <View 
   style={{
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    backgroundColor:'#F8F8F8',
    flex: 1,
   }}
  >
   <StatusBar barStyle="light-content" backgroundColor="#FFF"/>
   {children}
  </View>
 );
}