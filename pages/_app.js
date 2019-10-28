import React from 'react'
import App from 'next/app'


import css from "../public/css/login.css"


export default class MyApp extends App {
  
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    name: "Morgan",
  }

  render () {
    const { Component, pageProps } = this.props

    return (
        <Component {...pageProps} {...this.state}/>
    )
  }
}