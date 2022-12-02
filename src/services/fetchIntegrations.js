import { API_KEY } from "../constants"

export const fetchIntegrations = async (category) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + API_KEY },
    }
    const response = await fetch('/api/organizations/integrations', requestOptions)
    const result = await response.json()

    return result.results.filter(integration => integration.enabled_categories.includes(category))
}