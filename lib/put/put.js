"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutRecord = exports.Put = void 0;
const uniqid_1 = __importDefault(require("../utils/uniqid"));
const Put = async (apiKey, params) => {
    const response = await fetch("https://api.abcdb.dev/api/put", {
        method: "PUT",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-ABCDB-TOKEN": apiKey,
        },
        body: JSON.stringify(params),
    });
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Failed to perform Put operation due to authentication please check your API key");
        }
        throw new Error(`Failed to perform Put operation with code: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
exports.Put = Put;
const PutRecord = async (apiKey, params) => {
    params.key = `${params.key}-${(0, uniqid_1.default)()}`;
    const response = await fetch("https://api.abcdb.dev/api/put", {
        method: "PUT",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-ABCDB-TOKEN": apiKey,
        },
        body: JSON.stringify(params),
    });
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Failed to perform Put operation due to authentication please check your API key");
        }
        throw new Error(`Failed to perform Put operation with code: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
exports.PutRecord = PutRecord;
//# sourceMappingURL=put.js.map