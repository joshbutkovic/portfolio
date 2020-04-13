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
        </Head>
    );
};

export default DocumentHead;
