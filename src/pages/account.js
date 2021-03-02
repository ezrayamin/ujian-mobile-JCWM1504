import React from 'react'
import {View, Text} from 'react-native'
import { Icon, Button } from 'react-native-elements'
import {useDispatch, useSelector} from 'react-redux'
import {CommonActions} from '@react-navigation/native'
import {logout} from '../action'


const Account = ({navigation}) => {
    const {name} = useSelector((state) => {
        return {
            name: state.userReducer.username
        }
    })

    React.useEffect(() => {
        if (!name) {
            const resetAct = CommonActions.reset({
                index: 0,
                routes: [{name: 'Login'}]
            })
            navigation.dispatch(resetAct)
        }
    })

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <View>
            <Text>profile</Text>
            <Button
            title="Log Out"
            onPress={handleLogout}
            // icon={
            //     <Icon
            //       name="sign-out-alt"
            //       size={15}
            //       color="white"
            //     />
            //   }
            buttonStyle={{justifyContent: 'flex-start', backgroundColor: 'red', paddingHorizontal: 13}}
            />
        </View>
    )
}
export default Account