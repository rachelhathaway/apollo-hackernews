import { createNetworkInterface } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { GC_AUTH_TOKEN } from '../constants';

const graphcoolId = 'cj58oqaqzwttv0105hs39755v';

const endpoints = {
  simple: `https://api.graph.cool/simple/v1/${graphcoolId}`,
  relay: `https://api.graph.cool/relay/v1/${graphcoolId}`,
  subscriptions: `wss://subscriptions.graph.cool/v1/${graphcoolId}`,
  file: `https://api.graph.cool/file/v1/${graphcoolId}`
};

const networkInterface = createNetworkInterface({
  uri: endpoints.simple
});

const wsClient = new SubscriptionClient(endpoints.subscriptions, {
  reconnect: true,
  connectionParams: {
     authToken: localStorage.getItem(GC_AUTH_TOKEN),
  }
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

networkInterface.use([
  {
    applyMiddleware(req, next) {
      const token = localStorage.getItem(GC_AUTH_TOKEN);
      if (!req.options.headers) {
        req.options.headers = {};
      }
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    }
  }
]);

export {
  networkInterfaceWithSubscriptions
}
