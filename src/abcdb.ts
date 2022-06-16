import { Get, GetParams, GetResponse } from "./get/get";
import { List, ListParams, ListResponse } from "./list/list";
import { Put, PutRecord, PutParams, PutResponse } from "./put/put";
import { Delete, DeleteParams, DeleteResponse } from "./delete/delete";
import {
  BatchDelete,
  BatchDeleteParams,
  BatchDeleteResponse,
} from "./delete/batchdelete";

interface Options {
  apiKey: string;
}

export class AbcDB {
  apiKey: string;

  constructor(opts: Options) {
    this.apiKey = opts.apiKey;
  }

  async get(params: GetParams): Promise<GetResponse> {
    return await Get(this.apiKey, params);
  }

  async list(params: ListParams): Promise<ListResponse> {
    return await List(this.apiKey, params);
  }

  async put(params: PutParams): Promise<PutResponse> {
    return await Put(this.apiKey, params);
  }

  async putRecord(params: PutParams): Promise<PutResponse> {
    return await PutRecord(this.apiKey, params);
  }

  async delete(params: DeleteParams): Promise<DeleteResponse> {
    return await Delete(this.apiKey, params);
  }

  async batchDelete(params: BatchDeleteParams): Promise<BatchDeleteResponse> {
    return await BatchDelete(this.apiKey, params);
  }
}

export default AbcDB;
