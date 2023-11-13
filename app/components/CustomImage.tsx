'use client';

import Image, { ImageLoaderProps } from 'next/image';

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

function CustomImage() {
  return (
    <Image
      loader={imageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}

export default CustomImage;
