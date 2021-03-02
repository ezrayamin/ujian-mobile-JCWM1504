import Axios from 'axios'

export const getTotal = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get(`https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1`)

            dispatch({ type: 'GET_TOTAL', payload: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }
}