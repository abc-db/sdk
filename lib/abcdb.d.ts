import { GetParams, GetResponse } from './get/get';
import { ListParams, ListResponse } from './list/list';
import { PutParams, PutResponse } from './put/put';
import { DeleteParams, DeleteResponse } from './delete/delete';
import { BatchDeleteParams, BatchDeleteResponse } from './delete/batchdelete';
interface Options {
    apiKey: string;
}
export declare class AbcDB {
    apiKey: string;
    constructor(opts: Options);
    get(params: GetParams): Promise<GetResponse>;
    list(params: ListParams): Promise<ListResponse>;
    put(params: PutParams): Promise<PutResponse>;
    putRecord(params: PutParams): Promise<PutResponse>;
    delete(params: DeleteParams): Promise<DeleteResponse>;
    batchDelete(params: BatchDeleteParams): Promise<BatchDeleteResponse>;
}
export default AbcDB;
