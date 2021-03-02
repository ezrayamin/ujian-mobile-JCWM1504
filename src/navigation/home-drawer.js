import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomePage from '../pages/home'
import Account from '../pages/account'


const HomeDrawer = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={HomePage}/>
            <Drawer.Screen name="Account" component={Account}/>
        </Drawer.Navigator>
    )
}

export default HomeDrawer