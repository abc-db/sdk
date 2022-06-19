"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Put = void 0;
const Put = async (apiKey, params) => {
    const response = await fetch('https://api.abcdb.dev/api/put', {
        method: 'PUT',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-ABCDB-TOKEN': apiKey,
        },
        body: JSON.stringify(params),
    });
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Failed to perform Put operation due to authentication please check your API key');
        }
        throw new Error(`Failed to perform Put operation with code: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
exports.Put = Put;
//# sourceMappingURL=put.js.map