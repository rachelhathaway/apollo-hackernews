import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj58oqaqzwttv0105hs39755v'
});

const client = new ApolloClient({ networkInterface });

function WrappedApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

registerServiceWorker();
