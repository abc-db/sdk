import APIClient from './apiclient';
import {Get, GetResponse} from './get/get';
import {List, ListResponse} from './list/list';
import {Put, PutParams, PutResponse} from './put/put';
import {Delete, DeleteResponse} from './delete/delete';
import {BatchDelete, BatchDeleteResponse} from './delete/batchdelete';

interface Options {
  apiKey: string;
  hostOverride?: string;
}

export class AbcDB {
  apiClient: APIClient;

  constructor(opts: Options) {
    this.apiClient = new APIClient(opts.apiKey, opts.hostOverride);
  }

  async get(key: string): Promise<GetResponse> {
    return await Get(this.apiClient, key);
  }

  async list(prefix?: string): Promise<ListResponse> {
    return await List(this.apiClient, prefix);
  }

  async put(params: PutParams): Promise<PutResponse> {
    return await Put(this.apiClient, params);
  }

  async delete(key: string): Promise<DeleteResponse> {
    return await Delete(this.apiClient, key);
  }

  async batchDelete(prefix: string): Promise<BatchDeleteResponse> {
    return await BatchDelete(this.apiClient, prefix);
  }
}
export default AbcDB;
