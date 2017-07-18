import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { GC_AUTH_TOKEN } from './constants';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj58oqaqzwttv0105hs39755v'
}).use([
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
])

const client = new ApolloClient({ networkInterface });

function WrappedApp() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

registerServiceWorker();
