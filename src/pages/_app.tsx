import GlobalStyle from '../styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import darktheme from "../styles/darkTheme";
import { ApolloProvider } from '@apollo/client';
import { client } from '../services/apollo';
import AppProvider from '../hooks/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </AppProvider>
    </>
  );
}

export default MyApp
