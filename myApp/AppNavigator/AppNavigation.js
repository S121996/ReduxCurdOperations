import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import Users from '../screens/Users';
import AddUsers from '../screens/AddUsers';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Users"
          component={Users}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddUsers" component={AddUsers} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default AppNavigation;
