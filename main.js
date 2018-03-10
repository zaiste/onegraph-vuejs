import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

import OneGraphApolloClient from 'onegraph-apollo-client';

const APP_ID = 'SET-YOUR-APP-ID';

Vue.use(VueApollo);

// const client = new OneGraphApolloClient({
//   appId: 'sss',
//   connectToDevTools: true
// })

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://serve.onegraph.com/dynamic?app_id=' + APP_ID,
    headers: {'Content-Type': 'application/json'},
    credentials: 'include'
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: client,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
})
