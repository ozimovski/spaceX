import GlobalStyle from './../style/GlobalStyle.style';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// components
import Navigation from '../Components/Navigation/Navigation.component';

// containers
import ShipsContainer from '../Containers/ShipsContainer/ShipsContainer.component';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path, locations }) => {
      console.log(message, path, locations);
      return null;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <ApolloProvider client={client}>
        <ShipsContainer />
      </ApolloProvider>
    </>
  );
};

export default App;
