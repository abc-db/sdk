# ABC-DB SDK

Public SDK for AbcDB. Setting up cloud databases is as easy as "ABC"!

## Installation

```bash
# NPM
npm install abc-db-sdk

# Yarn
yarn add abc-db-sdk
```

## Usage

Example usage:

```javascript
import AbcDB from 'abc-db-sdk'

const db = new AbcDB({ apiKey: '{your_database_api_key}' })

await db.put({
  key: 'dummy-key',
  data: {
    name: 'John Doe',
    occupation: 'Pilot',
    address: {
      street: '123 ABCXYZ Rd.',
      city: 'Brooklyn',
      state: 'New York',
      zip: '11201'
    }
  }
})

const record = await db.get('dummy-key')

const records = await db.list()
const prefixedRecords = await db.list('dummy')

await db.delete('dummy-key')
```

## Advanced usages

Writing record with random key.

```javascript
const record = await db.put({
  data: {
    name: 'John Doe',
    occupation: 'Pilot',
    address: {
      street: '123 ABCXYZ Rd.',
      city: 'Brooklyn',
      state: 'New York',
      zip: '11201'
    }
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
