"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = void 0;
const Get = async (apiKey, key) => {
    const response = await fetch(`https://api.abcdb.dev/api/get?key=${key}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-ABCDB-TOKEN': apiKey,
        },
    });
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Failed to perform Get operation due to authentication please check your API key');
        }
        throw new Error(`Failed to perform Get operation with code: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
exports.Get = Get;
//# sourceMappingURL=get.js.map