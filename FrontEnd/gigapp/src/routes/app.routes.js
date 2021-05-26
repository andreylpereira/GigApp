import React from 'react';
import Dashboard from '../pages/Dashboard/Home';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Dashboard}/>
    </AppStack.Navigator>
)

export default AppRoutes;