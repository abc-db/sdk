"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
const Delete = async (apiKey, key) => {
    const response = await fetch('https://api.abcdb.dev/api/delete', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-ABCDB-TOKEN': apiKey,
        },
        body: JSON.stringify({ key }),
    });
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Failed to perform Delete operation due to authentication please check your API key');
        }
        throw new Error(`Failed to perform Delete operation with code: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
exports.Delete = Delete;
//# sourceMappingURL=delete.js.map