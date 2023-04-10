import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add this inline script in the head */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const theme = window.matchMedia("(prefers-color-scheme: dark)");
                  if (theme.matches) {
                    document.documentElement.setAttribute("dark", "");
                  } else {
                    document.documentElement.removeAttribute("dark");
                  }
                })();
              `,
            }}
          />
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