import {
    NativeStackNavigationProp,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { FeedScreen } from '../screens/FeedScreen';
import { Profile } from '../screens/Profile';
import { Details } from '../screens/Details';
import { useLayoutEffect } from 'react';
import DrawerNavigation from './DrawerNavigator';

export type RootStackParamList = {
    home: undefined;
    feed: undefined;
    profile: undefined;
    details: { id: number };
    drawer: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

/**
 * This is the recommended way to declare navigation hook type
 */
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1C357F',
                },
                headerTintColor: '#fff',
            }}
        >
            <RootStack.Screen
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Home',
                }}
            />
            <RootStack.Screen name='feed' component={FeedScreen} />
            <RootStack.Screen name='profile' component={Profile} />
            <RootStack.Screen name='details' component={Details} />
            <RootStack.Screen name='drawer' component={DrawerNavigation} />
        </RootStack.Navigator>
    );
};

export default RootStackNavigator;
