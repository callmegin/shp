import App from 'next/app';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
import ParentPage from 'components/containers/parentPage/ParentPage';

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

  return (
    <ApolloProvider client={apolloClient}>
      <ParentPage>
        <Component {...pageProps} pageLoading={loading} />
      </ParentPage>
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
