import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const HtmlHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="description"
      content="benjames.me - London-based developer with interest in chatbots, games, and web."
    />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>benjames.me</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
      crossOrigin="anonymous"
    />
    <link type="image/x-icon" rel="icon" href="/static/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link rel="stylesheet" type="text/css" href="/static/global.css" />
  </Head>
);

export default HtmlHead;
