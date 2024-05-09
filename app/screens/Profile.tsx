import { View, Text, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'profile'>;

export const Profile: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text>Profile</Text>
            <Button
                title='Details'
                onPress={() => navigation.push('details', { id: 1 })}
            />
        </View>
    );
};

Profile.displayName = 'Profile';
