import React from 'react';
import Head from 'next/head';

interface DocumentHeadProps {
    title: string;
}

const DocumentHead: React.FC<DocumentHeadProps> = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Real Food Table" />
            <meta name="og:title" property="og:title" content="A bowl of health"></meta>
            <meta charSet="utf-8" key="charSet" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="robots" content="index, follow"></meta>
            <link href="URL" rel="canonical"></link>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    );
};

export default DocumentHead;
