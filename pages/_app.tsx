import React, { FC } from 'react';
import type { AppProps } from 'next/app'
import '../styles/global.scss';
import {wrapper} from "../store";

const  WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
