import Image from './Image';

const Footer = () => {
  return (
    <div className='flex flex-1 justify-center m-5 p-5'>
      <div className='text-center'>
        <h3 className='flex m-3'>
          I'm currently an Apprentice at
          <a
            href='http://www.datasystems.rw/'
            target='_blank'
            className='text-blue-500 mx-3'
          >
            Data Systems Ltd.
          </a>
        </h3>
        <div className='m-3 flex justify-center items-center'>
          <span className='mx-3'> Contacts Me via </span>
          <Image src='/contact.png' width={25} height={25} />
          <span className='mx-3 text-blue-500'> +250789078834 </span> <br />
        </div>
        <p className='m-3'> Follow Me On</p>

        <a href='https://www.instagram.com/papy_dushime/' target='_blank'>
          <Image src='/instagram.png' width={100} height={100} />{' '}
        </a>
        <a href='https://twitter.com/emma_papy' target='_blank'>
          <Image src='/twitter.png' width={100} height={100} />
        </a>
        <a
          href='https://www.linkedin.com/in/emma-papy-dushime-7b9907147/'
          target='_blank'
        >
          <Image src='/linkedin.png' width={100} height={100} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
