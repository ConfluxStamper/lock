import LockConnector from '../src/connector';

export default class Connector extends LockConnector {
  async connect() {
    let provider;
    if (window['platon'] && window['platon'].isConnected()) {
      provider = window['platon'];
      try {
        await provider.request({ method: 'platon_requestAccounts' })
      } catch (e) {
        console.error(e);
      }
      return provider;
    }
  }

  isLoggedIn(): boolean {
    return !!window['platon'];
  }
}
