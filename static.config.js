import React from 'react';
import path from 'path';

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="http://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap'),
    'jss-provider',
  ],
};
