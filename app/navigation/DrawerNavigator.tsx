import { createDrawerNavigator } from '@react-navigation/drawer';
import { FeedScreen } from '../screens/FeedScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Profile } from '../screens/Profile';

type DrawerStackParamList = {
    home: undefined;
    feed: undefined;
    profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='home' component={HomeScreen} />
            <Drawer.Screen name='feed' component={FeedScreen} />
            <Drawer.Screen name='profile' component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
