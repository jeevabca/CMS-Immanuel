import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as ReduxProvider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import store from '../Redux/Store';
import {AuthProvider} from '../Redux/AuthProviders';
import {SCREENS} from '../Constants/ScreenNames';
import SplashScreen from '../Screens/Viewer/Splash/SplashScreen';
import HomeController from '../Screens/Controller/Home/HomeController';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <AuthProvider>
          <Stack.Navigator
            initialRouteName={SCREENS.SPLASH_SCREEN}
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={SCREENS.SPLASH_SCREEN}
              component={SplashScreen}
            />
            <Stack.Screen
              name={SCREENS.HOME_SCREEN}
              component={HomeController}
            />
          </Stack.Navigator>
        </AuthProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};

export default AppRouter;
