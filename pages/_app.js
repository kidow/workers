import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import 'styles/index.scss'
import { DefaultTemplate } from 'components/templates'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import reducer from 'store'
import { composeWithDevTools } from 'redux-devtools-extension'
import penderMiddleware from 'redux-pender'

const makeStore = () => {
  const middlewares =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(penderMiddleware()))
      : compose(applyMiddleware(penderMiddleware()))

  return createStore(reducer, middlewares)
}

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Head>
          <title>Born Worker</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.3/antd.css"
          />
        </Head>
        <Provider store={store}>
          <DefaultTemplate>
            <Component {...pageProps} />
          </DefaultTemplate>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(CustomApp)
