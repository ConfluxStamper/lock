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
import confluxPortal from '@stampers/lock/connectors/conflux-portal';

// Init Lock
const lock = new Lock();

// Add conflux-portal connector
lock.addConnector({
  key: 'conflux-portal',
  connector: confluxPortal
});

// Log in with conflux-portal
const connector = lock.getConnector('conflux-portal');
const provider = await connector.connect('conflux-portal');

// Log out
await connector.logout();

// Is logged in?
const isLoggedIn = await connector.isLoggedIn();
```
