# Lock.js

A lightweight JavaScript library for log in to PlatON.

### Install
To install Lock.js, open your terminal and run:
```
npm install @stampers/lock
```

### Usage
```js
import { Lock } from '@stampers/lock';
import platonPortal from '@stampers/lock/connectors/platon-portal';

// Init Lock
const lock = new Lock();

// Add platon-portal connector
lock.addConnector({
  key: 'platon-portal',
  connector: platonPortal
});

// Log in with platon-portal
const connector = lock.getConnector('platon-portal');
const provider = await connector.connect('platon-portal');

// Log out
await connector.logout();

// Is logged in?
const isLoggedIn = await connector.isLoggedIn();
```
