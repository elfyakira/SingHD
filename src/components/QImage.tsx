import NextImage, { ImageProps } from 'next/image'

export default function QImage(props: ImageProps) {
  return <NextImage quality={props.quality ?? 95} {...props} />
}
