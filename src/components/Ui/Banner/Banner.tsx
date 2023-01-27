import { Link } from 'react-router-dom';
import { BannerProps } from './Banner.type';
import { Img } from '../../Common/Img/Img';

const Banner = ({ link, imgPath, text, title }: BannerProps): JSX.Element => {
    return (
        <section className="content">
            <div className="container">
                <div className="banner">
                    <div className="banner_container">
                        <div className="banner_content">
                            <p className="banner_text">{text}</p>
                            <h2 className="title">{title}</h2>
                            {link && <Link className="button" to={link}>Shop now</Link>}
                        </div>
                    </div>
                    <div className="banner_img-wrap">
                        <Img imgPath={imgPath} altText='boy and girl' className='banner_img' width="320" height="226"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Banner };
