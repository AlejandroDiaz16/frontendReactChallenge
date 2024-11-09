const API_BASE_URL = 'http://localhost:5000';

async function api(
    endpoint,
    {method = 'GET', headers = {}, body = null} = {}
) {
    const config = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
    }

    if(body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config)

    return response.json();
}                            

export default api;