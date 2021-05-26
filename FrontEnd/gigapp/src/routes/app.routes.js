import React from 'react';
//import Home from '../pages/Dashboards/Home';
import Drawers from './Navigations/Drawers';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Drawers}/>
    </AppStack.Navigator>
)

export default AppRoutes;