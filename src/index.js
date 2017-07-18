import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, ApolloClient } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { networkInterfaceWithSubscriptions } from './apollo';

const client = new ApolloClient({ networkInterface: networkInterfaceWithSubscriptions });

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
