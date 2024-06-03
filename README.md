# Lock.js

A lightweight JavaScript library for log in to Conflux.

### Install
To install Lock.js, open your terminal and run:
```
npm install @stampers/lock
```

### Usage
```js
import { Lock } from '@stampers/lock';
import fluent from '@stampers/lock/connectors/fluent';

// Init Lock
const lock = new Lock();

// Add fluent connector
lock.addConnector({
  key: 'fluent',
  connector: fluent
});

// Log in with fluent
const connector = lock.getConnector('fluent');
const provider = await connector.connect('fluent');

// Log out
await connector.logout();

// Is logged in?
const isLoggedIn = await connector.isLoggedIn();
```
