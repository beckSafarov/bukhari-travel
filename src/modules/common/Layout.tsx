import Head from 'next/head'

import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children?: React.ReactNode;
  title: string,
  content: string,
  isBare?: boolean
};

const Layout = ({children, title, content, isBare}:Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!isBare && <Navbar />}
      {children}
      {!isBare && <Footer />}
    </>
  )
}

Layout.defaultProps = {
  title: 'Al Bukhari Travel',
  content: 'Islamic Travel to Uzbekistan',
  hideNavbar: false
}

export default Layout