import { GetResponse } from './get/get';
import { ListResponse } from './list/list';
import { PutParams, PutResponse } from './put/put';
import { DeleteResponse } from './delete/delete';
import { BatchDeleteResponse } from './delete/batchdelete';
interface Options {
    apiKey: string;
}
export declare class AbcDB {
    apiKey: string;
    constructor(opts: Options);
    get(key: string): Promise<GetResponse>;
    list(prefix?: string): Promise<ListResponse>;
    put(params: PutParams): Promise<PutResponse>;
    delete(key: string): Promise<DeleteResponse>;
    batchDelete(prefix: string): Promise<BatchDeleteResponse>;
}
export default AbcDB;
