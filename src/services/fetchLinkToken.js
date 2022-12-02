import { API_KEY } from "../constants"

const org_id = "id" + Math.random().toString(16).slice(2)

export const getLinkToken = async (slug, category) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + API_KEY,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            end_user_origin_id: org_id, //this should be the organization id of the user linking the integration
            end_user_organization_name: "Company Name", //this should be the organization name of the user linking the integration
            end_user_email_address: "jack.cavalier@merge.dev", //this should be the email of the user linking the integration
            categories: [category],
            integration: slug,
        })
    }
    const response = await fetch('/api/integrations/create-link-token', requestOptions)
    return await response.json()
}