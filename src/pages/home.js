import React from 'react'
import Axios from 'axios'
import { View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'
import {useDispatch, useSelector} from 'react-redux'
import {getTotal} from '../action'
const HomePage = ({navigation}) => {
    const [global, setGlobal] = React.useState([])
    // const dispatch = useDispatch()

    // const { global} = useSelector((state) => {
    //     return {
    //         global: state.globalReducer.global
    //     }
    // })

    React.useEffect(() => {
        Axios.get(`https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1`)
            .then(res => {
                setGlobal(res.data.Global)
                // console.log(global.Global)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <View>
            <Button
                title="Open Drawer"
                onPress={() => {
                    navigation.openDrawer()
                }} />
            {/* <Text>corona virus live update</Text>
            <view>
                <Card>
                    <Text>total</Text>
                </Card>
                <Card>
                    <Text>recovered</Text>
                </Card>
                <Card>
                    <Text>deaths</Text>
                </Card>
            </view>
            <Text>health tips</Text> */}
            <Text>total: {global.TotalConfirmed}</Text>
            <Text>+ {global.NewConfirmed}</Text>
            <Text>recovered: {global.TotalRecovered}</Text>
            <Text>+ {global.NewRecovered}</Text>
            <Text>deaths: {global.TotalDeaths}</Text>
            <Text>+ {global.NewDeaths}</Text>
        </View>
    )
}

export default HomePage