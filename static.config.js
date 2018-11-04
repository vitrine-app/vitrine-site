import axios from 'axios'
import React from 'react';
import { ServerStyleSheet } from 'styled-components'

export default {
  basePath: 'vitrine',
  getSiteData: () => ({
    title: 'Vitrine',
    slogan: 'Centralize all of your games within a simple interface'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
      {
        path: '/about',
        component: 'src/containers/About'
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp/>));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
      <Html>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
      </Html>
  )
}
