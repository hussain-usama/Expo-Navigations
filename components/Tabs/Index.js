import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../views/HomeScreen';
import DetailsScreen from '../../views/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Feeds from '../../views/Feeds';
import Articles from '../../views/Articles';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={DetailsScreen} />
                <Tab.Screen name="Feeds" component={Feeds} />
                <Tab.Screen name="Articles" component={Articles} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}