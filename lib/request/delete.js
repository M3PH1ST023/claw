import config from "../config.js";

const baseurl = config.baseUrl;

export async function deleteReq({ baseUrl = baseurl, endpoint = "/" } = {}) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: "DELETE",
            headers: config.headers,
        });
        return {
            response,
            data: await response.json(),
        };
    } catch (error) {
        console.error(error.message);
    }
}

export async function deleteById({
    baseUrl = baseurl,
    endpoint = "/",
    id,
} = {}) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}/${id}`, {
            method: "DELETE",
            headers: config.headers,
        });
        return {
            response,
            data: await response.json(),
        };
    } catch (error) {
        console.error(error.message);
    }
}
