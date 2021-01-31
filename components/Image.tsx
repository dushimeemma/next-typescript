import Image from 'next/image';

interface ImageProps {
  alt?: string;
  height: number;
  src: string;
  width: number;
}

const Icon = ({
  alt,
  height = 100,
  src,

  width = 100,
}: ImageProps) => {
  return <Image src={src} width={width} height={height} alt={alt} />;
};

export default Icon;
