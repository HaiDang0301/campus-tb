import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("contextmenu", function(e) {
                e.preventDefault();
              });
              document.addEventListener("copy", function(e) {
                e.preventDefault();
              });
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
