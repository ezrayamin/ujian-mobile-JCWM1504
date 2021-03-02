import React from 'react'
import Axios from 'axios'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { DataTable } from 'react-native-paper'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../action'
import { loop } from '../helper/query'

const Update = () => {
    const [thead, setThead] = React.useState(['Region', 'New Cases', 'Total Cases', 'Recovered', 'Deaths'])
    const [negara, setNegara] = React.useState([])
    // const dispatch = useDispatch()

    // const { global} = useSelector((state) => {
    //     return {
    //         global: state.globalReducer.global
    //     }
    // })

    React.useEffect(() => {
        Axios.get(`https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1`)
            .then(res => {
                setNegara(res.data.Countries)
                console.log(negara)
                // console.log(global.Global)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <View>
            <Text style={{ textAlign: 'center' }}>live update</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Country</DataTable.Title>
                    <DataTable.Title numeric>New Cases</DataTable.Title>
                    <DataTable.Title numeric>Total Cases</DataTable.Title>
                    <DataTable.Title numeric>Recovered</DataTable.Title>
                    <DataTable.Title numeric>Deaths</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={negara}
                    renderItem={({ item, index }) => (
                        <DataTable.Row key={index}>
                            <DataTable.Cell>{item.Country}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.NewConfirmed}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalConfirmed}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalDeaths}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    onPageChange={page => {
                        console.log(page);
                    }}
                    label="0-99 of 246"
                />
            </DataTable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});

export default Update