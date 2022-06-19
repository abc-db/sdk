import {Get, GetParams, GetResponse} from './get/get';
import {List, ListParams, ListResponse} from './list/list';
import {Put, PutRecord, PutParams, PutResponse} from './put/put';
import {Delete, DeleteParams, DeleteResponse} from './delete/delete';
import {
  BatchDelete,
  BatchDeleteParams,
  BatchDeleteResponse,
} from './delete/batchdelete';

interface Options {
  apiKey: string;
}

export class AbcDB {
  apiKey: string;

  constructor(opts: Options) {
    this.apiKey = opts.apiKey;
  }

  async get(key: string): Promise<GetResponse> {
    return await Get(this.apiKey, key);
  }

  async list(prefix?: string): Promise<ListResponse> {
    return await List(this.apiKey, prefix);
  }

  async put(params: PutParams): Promise<PutResponse> {
    return await Put(this.apiKey, params);
  }

  async delete(key: string): Promise<DeleteResponse> {
    return await Delete(this.apiKey, key);
  }

  async batchDelete(prefix: string): Promise<BatchDeleteResponse> {
    return await BatchDelete(this.apiKey, prefix);
  }
}
export default AbcDB;
