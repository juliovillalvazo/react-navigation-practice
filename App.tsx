import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Providers } from './utils/Providers';
import RootStackNavigator from './app/navigation/RootStack';
import TabNavigator from './app/navigation/TabNavigator';

export default function App() {
    return (
        <Providers>
            {/* <RootStackNavigator /> */}
            <TabNavigator />
        </Providers>
    );
}
