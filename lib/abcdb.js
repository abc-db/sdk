"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbcDB = void 0;
const get_1 = require("./get/get");
const list_1 = require("./list/list");
const put_1 = require("./put/put");
const delete_1 = require("./delete/delete");
const batchdelete_1 = require("./delete/batchdelete");
class AbcDB {
    apiKey;
    constructor(opts) {
        this.apiKey = opts.apiKey;
    }
    async get(key) {
        return await (0, get_1.Get)(this.apiKey, key);
    }
    async list(prefix) {
        return await (0, list_1.List)(this.apiKey, prefix);
    }
    async put(params) {
        return await (0, put_1.Put)(this.apiKey, params);
    }
    async delete(key) {
        return await (0, delete_1.Delete)(this.apiKey, key);
    }
    async batchDelete(prefix) {
        return await (0, batchdelete_1.BatchDelete)(this.apiKey, prefix);
    }
}
exports.AbcDB = AbcDB;
exports.default = AbcDB;
//# sourceMappingURL=abcdb.js.map