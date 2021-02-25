import Head from "next/head";
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../themes';
import { GlobalStyles } from './../shared/styles';

import Layout from "../layout"

import { Provider } from 'react-redux'
import configureStore  from "../store"

export default function App({ Component, pageProps }) {

  const store = configureStore(pageProps.initialReduxState)

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <>
      <ThemeProvider 
        theme={
        theme === 'light' 
        ? lightTheme 
        : darkTheme
      }
      >
      <GlobalStyles />
      <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>NextJS Dashboard by Michal</title>
        </Head>
        <Layout 
          toggleTheme={toggleTheme}
          >
          <Provider 
            store={store}
          >
              <Component 
                {...pageProps} 
                />
            </Provider>
        </Layout>
      </ThemeProvider>
      
    </>
  )
}