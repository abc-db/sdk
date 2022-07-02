import APIClient from './apiclient';
import {Get, GetResponse} from './get/get';
import {List, ListResponse} from './list/list';
import {Put, PutParams, PutResponse} from './put/put';
import {Delete, DeleteResponse} from './delete/delete';
import {BatchDelete, BatchDeleteResponse} from './delete/batchdelete';
import crypto, {Cipher, Decipher} from 'crypto';

interface Options {
  apiKey: string;
  hostOverride?: string;
}

interface Record {
  key: string;
  data: object;
}

const CIPHER_ALGORITHM = 'aes-256-cbc';
const HASH_ALGORITHM = 'sha256';

export class AbcDB {
  #opts: Options;
  apiClient: APIClient;

  constructor(opts: Options) {
    this.#opts = opts;
    this.apiClient = new APIClient(
      // hash the API key to be used for authentication
      crypto.createHash(HASH_ALGORITHM).update(opts.apiKey).digest('base64'),
      opts.hostOverride,
    );
  }

  /**
   * Fetches a single record from the database using the passed {@param key}.
   *
   * The database only stores the encrypted value of the {@link Record#data}.
   * Before returning the response, a decryption will be done by the SDK to
   * decrypt the encrypted data back to a Javascript Object using the api key.
   *
   * @returns {Record} the decrypted record object persisted in the database.
   */
  async get(key: string): Promise<Record> {
    const record = await Get(this.apiClient, key);
    return {key: record.key, data: this.#decrypt(record.data)};
  }

  /**
   * Fetches a list of records from the database with an optional
   * {@param prefix} query.
   *
   * Just like {@link AbcDB#get} method, the list method will also perform
   * decryptions of records before returning them to the user.
   *
   * @returns {Record[]} decrypted record objects persisted in the database.
   */
  async list(prefix?: string): Promise<Record[]> {
    const listResponse = await List(this.apiClient, prefix);
    return listResponse.records.map(record => ({
      key: record.key,
      data: this.#decrypt(record.data),
    }));
  }

  /**
   * Insert or update a record to the database.
   *
   * Since the database only stores encrypted values based on the api key,
   * all writes will be decrypted first by the SDK.
   *
   * @returns {string} the key of the newly updated/inserted record.
   */
  async put(key: string, data: object): Promise<string> {
    return (
      await Put(this.apiClient, {
        key,
        data: this.#encrypt(data),
      })
    ).key;
  }

  /**
   * Simple deletion of a record in the database by its {@param key}.
   *
   * @returns {string} the key of the deleted record.
   */
  async delete(key: string): Promise<string> {
    return (await Delete(this.apiClient, key)).deleted_key;
  }

  /**
   * Batch deletion of records in the database by its {@param prefix}.
   *
   * @returns {string[]} keys of deleted records.
   */
  async batchDelete(prefix: string): Promise<string[]> {
    return (await BatchDelete(this.apiClient, prefix)).deleted_keys;
  }

  // Private methods //

  #encrypt(data: object): string {
    const cipher = crypto.createCipher(
      CIPHER_ALGORITHM,
      new Buffer(this.#opts.apiKey),
    );

    return Buffer.concat([
      cipher.update(JSON.stringify(data)),
      cipher.final(),
    ]).toString('base64');
  }

  #decrypt(encryptedDataString: string): object {
    const decipher = crypto.createDecipher(
      CIPHER_ALGORITHM,
      new Buffer(this.#opts.apiKey),
    );

    const decryptedString = Buffer.concat([
      decipher.update(new Buffer(encryptedDataString, 'base64')),
      decipher.final(),
    ]).toString();
    return JSON.parse(decryptedString);
  }
}
export default AbcDB;
