import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedScreen } from '../screens/FeedScreen';
import RootStackNavigator from './RootStack';
import { Ionicons } from '@expo/vector-icons';

type TabParamList = {
    homeTab: undefined;
    feedTab: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='homeTab'
                component={RootStackNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name='home' color={color} size={size} />
                        );
                    },
                }}
            />
            <Tab.Screen
                name='feedTab'
                component={FeedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='newspaper' color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
