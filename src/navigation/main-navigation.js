import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {useDispatch, useSelector} from 'react-redux'

import Login from '../pages/login'
import HomeTab from './home-tab'
import HomeDrawer from './home-drawer'

import {login, keep} from '../action'

const MainNav = () => {
    const dispatch = useDispatch()

    const Stack = createStackNavigator()

    React.useEffect(() => {
        dispatch(keep())
    }, [])

    const {username} = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })

    return (
        <Stack.Navigator headerMode={false}>
            {username
            ?
            <Stack.Screen name="HomeTab" component={HomeTab}/>
            :    
            <>   
             <Stack.Screen name="Login" component={Login} />
             </>
        }
            {/* <Stack.Screen name="Register" component={Register} /> */}
            {/* <Stack.Screen name="HomeDrawer" component={HomeDrawer}/> */}
        </Stack.Navigator>       
    )
}

export default MainNav