"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const List = async (apiKey, prefix = '') => {
    const response = await fetch(`https://api.abcdb.dev/api/list?prefix=${prefix}`, {
        headers: {
            'X-ABCDB-TOKEN': apiKey,
        },
    });
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Failed to perform List operation due to authentication please check your API key');
        }
        throw new Error(`Failed to perform List operation with code: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
exports.List = List;
//# sourceMappingURL=list.js.map