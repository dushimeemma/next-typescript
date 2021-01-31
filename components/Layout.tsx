import Head from 'next/head';

const Header = ({ children }) => {
  return (
    <>
      <Head>
        <title>I'm Emma Dushime</title>
        <link rel='icon' href='/dushimeemma.png' type='image/png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Header;
