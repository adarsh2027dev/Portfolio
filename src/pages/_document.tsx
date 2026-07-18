import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { themeScript } from "@/hooks/use-theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
