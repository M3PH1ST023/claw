import config from "../config.js";

const baseurl = config.baseUrl;

export async function get({ baseUrl = baseurl, endpoint = "/" } = {}) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
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

export async function getById({ baseUrl = baseurl, endpoint = "/", id } = {}) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}/${id}`, {
            headers: config.headers,
        });
        return { response, data: await response.json() };
    } catch (error) {
        console.error(error.message);
    }
}

export async function getByQuery({
    baseUrl = baseurl,
    endpoint = "/",
    query,
} = {}) {
    let queryString = "?";
    const queryLength = Object.keys.length;

    Object.keys(query).forEach((q, index) => {
        let tempString = `${q}=${query[q]}`;
        if (index !== queryLength) {
            queryString += tempString + "&";
        } else {
            queryString += tempString;
        }
    });

    try {
        const response = await fetch(`${baseUrl}${endpoint}${queryString}`, {
            headers: config.headers,
        });
        return { response, data: await response.json() };
    } catch (error) {
        console.error(error.message);
    }
}

export async function getByParams({
    baseUrl = baseurl,
    endpoint = "/",
    params,
} = {}) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}/${params}`, {
            headers: config.headers,
        });
        return { response, data: await response.json() };
    } catch (error) {
        console.error(error.message);
    }
}
