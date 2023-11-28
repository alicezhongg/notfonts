import "@/styles/globals.css";
import React from 'react';

export default function App({ Component, pageProps }) {
  return(
  <div className="bg-[#FFFEFB] h-[100vh]">
      <Component {...pageProps} />
    </div>
    );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const statusCode = ctx.res ? ctx.res.statusCode : ctx.err ? ctx.err.statusCode : null;

  return { pageProps, statusCode };
};