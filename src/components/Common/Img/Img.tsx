import { ImgProps } from './Img.types';

const Img = ({ imgPath, className, altText, width, height }: ImgProps): JSX.Element => {
    return (
        <picture>
            <source type="image/webp" srcSet={`/img/webp/${imgPath}.webp, /img/webp/${imgPath}@2x.webp 2x`} />
            <img className={className}src={`/img/${imgPath}.jpg`} srcSet={`/img/${imgPath}@2x.jpg 2x`} alt={altText} width={width} height={height} />
        </picture>

    );
};

export { Img };
