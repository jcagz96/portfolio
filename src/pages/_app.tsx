import GlobalStyle from '../styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import darktheme from "../styles/darkTheme";
import { ApolloProvider } from '@apollo/client';
import { client } from '../services/apollo';
import AppProvider from '../hooks/index';
import Head from 'next/head'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>João Garcez</title>
      </Head>
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
