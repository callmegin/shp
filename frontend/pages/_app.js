import App from 'next/app';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apollo/apolloClient';
import { RouterScrollProvider } from '@moxy/next-router-scroll';

import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from 'lib/store/reducers';

import ParentPage from 'components/containers/ParentPage/ParentPage';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      console.log('LOADING');
      setLoading(true);
    });

    return () =>
      Router.events.off('routeChangeStart', () => {
        console.log('Clearing');
      });
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      console.log('not anymore');
      setLoading(false);
    });
    return () =>
      Router.events.off('routeChangeComplete', () => {
        console.log('CLEARING');
      });
  }, []);

  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const store = createStore(reducer, applyMiddleware(...middleware));

  return (
    <ApolloProvider client={apolloClient}>
      <RouterScrollProvider disableNextLinkScroll={false}>
        <Provider store={store}>
          <ParentPage pageLoading={loading}>
            <Component {...pageProps} pageLoading={loading} />
          </ParentPage>
        </Provider>
      </RouterScrollProvider>
    </ApolloProvider>
  );
}

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   pageProps.query = ctx.query;

//   return { pageProps };
// };

export default MyApp;
