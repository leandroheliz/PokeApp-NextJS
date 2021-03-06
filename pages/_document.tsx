import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

import { CssBaseline } from "@nextui-org/react";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {CssBaseline.flush()}
          <link rel="icon" href="/favicon/favicon.ico" />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
