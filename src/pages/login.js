import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import {useDispatch, useSelector} from 'react-redux'

import {login} from '../action'

const Login = ({navigation}) => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const {name} = useSelector((state) => {
        return {
            name: state.userReducer.username
        }
    })

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login(username))
    }

    React.useEffect(() => {
        if (name) navigation.navigate('HomeTab')
    }, [name])

    return (
        <View>
            <Text>Login Screen</Text>
            <Input
                placeholder="Username"
                // leftIcon={{ type: 'font-awesome', name: 'user' }}
                // style={styles}
                onChangeText={setUsername}
            />
            {/* <Text style={styles.txt}>Password</Text> */}
            <Input
                placeholder="Password"
                // leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button
                title="Log in"
                buttonStyle={{ backgroundColor: 'white', borderRadius: 25, borderColor: 'black', border: 1 }}
                titleStyle={{color: 'black'}}
                onPress={handleLogin}
            />
        </View>
    )
}

export default Login