import Head from 'next/head'
import React from 'react'
import Footer from './Footer';

type Props = {
  children?: React.ReactNode;
  title: string,
  content: string,
};

const Layout = ({children, title, content}:Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
      <Footer/>
    </>
  )
}

Layout.defaultProps = {
  title: 'Al Bukhari Travel',
  content: 'Islamic Travel to Uzbekistan',
}

export default Layout