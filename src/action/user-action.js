import AsyncStorage from '@react-native-async-storage/async-storage'
export const login = (username) => {
    return async (disptach) => {
        try {
            const set = await AsyncStorage.setItem('username', JSON.stringify(username))
            console.log(set)
            disptach({
                type: 'LOGIN', 
                payload: username
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const keep = () => {
    return async (disptach) => {
        try {
           const get = await AsyncStorage.getItem('username')
           if (!get) return 
           disptach({
            type: 'LOGIN', 
            payload: username
        })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const logout = () => {
    return async (disptach) => {
        try {
            await AsyncStorage.removeItem('username')
            disptach({
                type: 'LOGOUT'
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}