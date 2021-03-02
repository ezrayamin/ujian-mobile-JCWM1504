import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeDrawer from './home-drawer'
import Update from '../pages/update'
const HomeTab = () => {
    const Tab = createBottomTabNavigator()

    return (
            <Tab.Navigator>
                <Tab.Screen name="HomeDrawer" component={HomeDrawer}/>
                <Tab.Screen name="Update" component={Update}/>
            </Tab.Navigator>
    )
}

export default HomeTab
