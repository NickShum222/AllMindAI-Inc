import React from "react";
import Head from "next/head";
import {useRouter} from 'next/router';

const index = ({ theme }) => {
    const router = useRouter();
    const path = router.pathname;
  return (
    <Head>
      <title>AllMind-AI | Nick Shum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content="Nick Shum | Software Developer" />
      <meta name="author" content="Nick Shum" />
      <meta
        name="theme-color"
        content={"#053d34"}
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />

      <link rel="icon" href="favicon.ico" sizes="any" />
    </Head>
  );
};

export default index;
