import { deleteById, deleteReq } from "./delete.js";
import { get, getById, getByParams, getByQuery } from "./get.js";
import { patch } from "./patch.js";
import { post } from "./post.js";
import { put } from "./put.js";

const request = {
    get,
    getByQuery,
    getByParams,
    getById,
    post,
    put,
    patch,
    delete: deleteReq,
    deleteById,
};

export default request;
