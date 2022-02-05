import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Craftshop</title>
                <meta name="description" content="The Eve project"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
