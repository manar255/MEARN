import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
