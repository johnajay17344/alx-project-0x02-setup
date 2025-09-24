import React from "react";
import Head from "next/head";
import HomePage from "./index";
import Header from "../components/layout/Header";
const MyApp =()=>{
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js application" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <HomePage />
    </>
  );
}