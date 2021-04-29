import * as Network from 'expo-network';

export const checkNetworkStatus = async () => {
 const result = await Network.getNetworkStateAsync();
 console.log("func con",result.isInternetReachable)
 return result.isInternetReachable;
}