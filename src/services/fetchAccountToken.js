import { API_KEY } from "../constants"

export const fetchAccountToken = async (public_token, category) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + API_KEY,
        }
    }
    const response = await fetch('/api/' + category + '/v1/account-token/' + public_token, requestOptions)
    return await response.json()
}