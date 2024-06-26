import { Button, StyleSheet, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title='Info' onPress={() => alert('Hi from info')} />
            ),
        });
    }, []);
    return (
        <View>
            <Button title='Feed' onPress={() => navigation.push('feed')} />
            <Button
                title='Open Profile'
                onPress={() => navigation.push('profile')}
            />
            <Button
                title='Go to Home with Drawer'
                onPress={() => navigation.navigate('drawer')}
            />
            <Button
                title='Open Modal'
                onPress={() => navigation.navigate('modal')}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

HomeScreen.displayName = 'HomeScreen';
