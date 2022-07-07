# ABC-DB SDK

Public SDK for AbcDB. Setting up cloud databases is as easy as "ABC"!

## Motivation

Does anyone feel like Firestore is becoming too complicated for the average
user? I used Firestore for my most recent project and I certainly think so.
The amount of
[customization and options](https://firebase.google.com/docs/reference/js/firestore_)
is just overwhelming. From security rules, cache vs. server fetch, snapshots,
pending writes, etc. the product offers a lot of functionalities that 80% of
its users will not use.

With AbcDB we want to keep it simple stupid. We give you a simple database
with Map-like semantics that just works.

Are we trying to replace Firestore? By no means. We want to provide a simpler
alternative to Firebase that lightweight database users can utilize.

## Installation

```bash
# NPM
npm install abc-db-sdk

# Yarn
yarn add abc-db-sdk
```

## End-to-end encryption

Transparency and user trust is our number one priority. All of AbcDB records
are end-to-end encrypted using your API key, which is only retained by you and
you only. Authentication to the server is handled by the hash of the API key.
The SDK is public for you to verify for yourselves.

Because of this end-to-end encryption, AbcDB does not support regeneration of
API keys (we simply do not have your API key to re-encrypt your data for you),
and it is up to you to keep your API key safe. For example, you should
not expose your API key in your frontend code since the Javascript source is
publicly viewable. Take a look at the examples page on our
[documentation page](https://docs.abcdb.dev/docs/examples/jamstack) on how to
keep your API key safe.

## Usage

Example usage:

```javascript
import AbcDB from 'abc-db-sdk'

const db = new AbcDB({ apiKey: '{your_database_api_key}' })

await db.put(
  'dummy-key',
  {
    name: 'John Doe',
    occupation: 'Pilot',
    address: {
      street: '123 ABCXYZ Rd.',
      city: 'Brooklyn',
      state: 'New York',
      zip: '11201'
    }
  },
)

const record = await db.get('dummy-key')

const records = await db.list()
const prefixedRecords = await db.list('dummy')

await db.delete('dummy-key')
```

## Advanced usages

Writing record with random key.

```javascript
const record = await db.putWithRandomKey({
  name: 'John Doe',
  occupation: 'Pilot',
  address: {
    street: '123 ABCXYZ Rd.',
    city: 'Brooklyn',
    state: 'New York',
    zip: '11201'
  }
})
console.log(record) // Result: { key: '{random-key}' }
```

Batch deletes based on a prefix.

```javascript
await db.batchdelete('dummy')
```

## Roadmap

- Transaction support by end of July 2022
- Origin-based authorization by end of July 2022
- Go SDK by end of July 2022

## Looking for more features?

Submit an issue! We will address them as soon as possible.
