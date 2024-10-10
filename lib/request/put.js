import config from "../config.js";

const baseurl = config.baseUrl;

export async function put({
    baseUrl = baseurl,
    endpoint = "/",
    id,
    body,
} = {}) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}/${id}`, {
            method: "PUT",
            headers: config.headers,
            body: JSON.stringify(body),
        });
        return {
            response,
            data: await response.json(),
        };
    } catch (error) {
        console.error(error.message);
    }
}
