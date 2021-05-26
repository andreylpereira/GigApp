import React from 'react';
import Home from '../pages/Dashboards/Home';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home}/>
    </AppStack.Navigator>
)

export default AppRoutes;