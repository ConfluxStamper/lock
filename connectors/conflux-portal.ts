import LockConnector from '../src/connector';

export default class Connector extends LockConnector {
  async connect() {
    let provider;
    if (window['conflux'] && window['conflux'].isConfluxPortal) {
      provider = window['conflux'];
      try {
        await window['conflux'].enable();
      } catch (e) {
        console.error(e);
      }
    }
    return provider;
  }

  isLoggedIn(): boolean {
    return !!window['conflux'];
  }
}
