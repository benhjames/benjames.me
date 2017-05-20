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
    <style jsx global>{`
      @font-face {
        font-family: 'chunkfive';
        src: url('static/fonts/chunkfive-webfont.eot');
        src: url('static/fonts/chunkfive-webfont.eot?#iefix') format('embedded-opentype'),
            url('static/fonts/chunkfive-webfont.woff2') format('woff2'),
            url('static/fonts/chunkfive-webfont.woff') format('woff'),
            url('static/fonts/chunkfive-webfont.ttf') format('truetype'),
            url('static/fonts/chunkfive-webfont.svg#chunkfiveroman') format('svg');
        font-weight: normal;
        font-style: normal;
      }

      body {
        background-color: #173e43;
      }

      .row-padding {
        padding-top: 50px;
        padding-bottom: 40px;
      }

      .row-extra-padding {
        padding-top: 80px;
        padding-bottom: 70px;
      }

      .link-secondary {
        color: #f0ad4e;
      }

      h1, h2, h3, h4 {
        font-family: 'chunkfive'
      }
    `}</style>
  </Head>
);

export default HtmlHead;
