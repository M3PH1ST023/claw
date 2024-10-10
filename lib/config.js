import dotenv from "dotenv";

dotenv.config();

const config = {
    baseUrl: process.env.BASE_URL,
    authToken: process.env.AUTH_TOKEN,
    headers: {
        "Content-Type": "application/json;chatset=utf-8",
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
};

export default config;
