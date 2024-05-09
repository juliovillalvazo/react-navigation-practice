import { NavigationContainer } from '@react-navigation/native';

type Providers = {
    children: React.ReactNode;
};

export const Providers: React.FC<Providers> = ({ children }) => {
    return <NavigationContainer>{children}</NavigationContainer>;
};
