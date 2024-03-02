import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "../../views/DetailsScreen";
import HomeScreen from "../../views/HomeScreen";

const Stack = createNativeStackNavigator();

export default function NativeNatigations(){
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ title: 'Home Screen' }} component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}