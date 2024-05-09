import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'details'>;

export const Details: React.FC<DetailsScreenProps> = ({
    navigation,
    route,
}) => {
    const { id } = route.params;

    return (
        <View>
            <Text>Details</Text>
            <Text>{id}</Text>
        </View>
    );
};

Details.displayName = 'Details';
