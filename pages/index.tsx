import Image from 'next/image';

import Container from '../components/Layout';
import Description from '../components/Description';
import Footer from '../components/Footer';
import Grade from '../components/Grade';

const Home = () => {
  return (
    <Container>
      <div className='flex  flex-1 h-screen items-center justify-center'>
        <Image src='/emma-dushime.png' alt='Emma Dushime' layout='fill' />
        <Description title="Hi, I'm " body='----Emma Dushime----' />
      </div>
      <Grade title='--- My Journey ---' img='/andela.jpg'>
        <h1 className=' text-2xl'>
          Andela Technical Leadership Program - (ATLP)
        </h1>
        <h3 className='italic m-5'>
          From
          <span className='bold mx-3 text-blue-600'>
            1<sup>st</sup>, June , 2020
          </span>
          Till <span className='bold mx-3 text-blue-600'>Date</span>
        </h3>
        <h3 className='italic m-5 text-blue-600'>
          Software Engineer - Kigali - Rwanda
        </h3>
        <p className='w-4/5'>
          I am a Software enginneer trained by Andela Rwanda in a Program called
          Andela Technical Leadership Program.
          <br /> Now I am a full Stack Developer with different skills in
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            className='text-blue-600 mx-3'
          >
            JavaScript
          </a>
          and
          <a
            href='https://www.typescriptlang.org/'
            className='text-blue-600 mx-3'
          >
            TypeScript.
          </a>
        </p>
        <p className='my-5'>
          <h3>Libraries and Frameworks</h3>
          <ol>
            <li>
              <a
                href='https://nodejs.org/en/'
                target='_blank'
                className='text-blue-500'
              >
                -&gt; NodeJS
              </a>
            </li>
            <li>
              <a
                href='https://expressjs.com/'
                target='_blank'
                className='text-blue-500'
              >
                -&gt; ExpressJS
              </a>
            </li>
            <li>
              <a
                href='https://nestjs.com/'
                target='_blank'
                className='text-blue-500'
              >
                -&gt; NestJS
              </a>
            </li>
            <li>
              <a
                href='https://reactjs.org/'
                target='_blank'
                className='text-blue-500'
              >
                -&gt; ReactJS
              </a>
            </li>
            <li>
              <a
                href='https://nextjs.org/'
                target='_blank'
                className='text-blue-500'
              >
                -&gt; NextJS
              </a>
            </li>
          </ol>
        </p>
      </Grade>
      <Footer />
    </Container>
  );
};

export default Home;
