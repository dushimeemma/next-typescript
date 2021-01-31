import Image from 'next/image';

interface GradeProps {
  children: any;
  img: string;
  title?: string;
}

const Grade = ({ children, img, title }: GradeProps) => {
  return (
    <>
      {title ? <h1 className='text-2xl text-center m-5'>{title}</h1> : null}
      <div className='flex flex-1 h-screen justify-center'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid-col-span-1 m-auto'>
            <Image
              src={img}
              alt='Andela Rwanda'
              width={500}
              height={500}
              className='rounded-lg'
            />
          </div>
          <div className='grid-col-span-1 m-auto'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Grade;
