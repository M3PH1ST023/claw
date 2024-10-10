import config from "../config.js";

const baseurl = config.baseUrl;

export async function post({ baseUrl = baseurl, endpoint = "/", body } = {}) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: "POST",
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
