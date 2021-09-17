import {Container} from '@material-ui/core';
import React from 'react';
import Navbar from './../components/Navbar';
import {Player} from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = (
  {
    title,
    description,
    keywords,
    children
  }: any) => {
  return (
    <>
      <Head>
        <title>{title || 'MiriadDreamz Music'}</title>
        <meta name="description"
              content={'MiriadDreamz Music. Here is a collection of the best tracks!' + description}/>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content={keywords || "MiriadDreamz, Music, MiriadDreamzMusic"}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Navbar/>
      <Container style={{margin: '90px 0'}}>
        {children as React.ReactChild}
      </Container>
      <Player/>
    </>
  )
}
