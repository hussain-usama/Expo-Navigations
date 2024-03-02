import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Articles from '../../views/Articles';
import Feeds from '../../views/Feeds';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={Feeds} />
                <Drawer.Screen name="Article" component={Articles} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}