import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Auth from "./pages/Auth";
import Main from "./pages/Main";

function App() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/notes" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
