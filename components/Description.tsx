interface DescProps {
  title: string;
  body: string;
}

const Description = ({ title, body }: DescProps) => {
  return (
    <p className='z-10 text-white text-center font-bold italic'>
      <h3 className='text-2xl'>{title}</h3>
      <h1 className='text-4xl'>{body}</h1>
    </p>
  );
};

export default Description;
