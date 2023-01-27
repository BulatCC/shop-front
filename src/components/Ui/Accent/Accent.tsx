import { Link } from 'react-router-dom';
import { UserBlock } from '../UserBlock/UserBlock';
import { Img } from '../../Common/Img/Img';
import { AppRoute } from '../../../Consts';

const Accent = (): JSX.Element => {
    return (
        <section className="accent content">
            <h1 className="visually-hidden">Denim</h1>
            <div className="container">
                <div className="accent_wrapper">
                    <nav className="nav accent_nav"><a className="nav_link" href="#">Woman</a><a className="nav_link" href="#">Man</a></nav>
                    <UserBlock classMod="accent_user-block" />
                </div>
                <div className="accent_container">
                    <div className="accent_img-wrap">
                        <Img imgPath='accent' altText='Куртка' className='accent_img' width="202" height="49"/>
                    </div>
                    <div className="accent_left-side">
                        <p className="accent_slogan">The quality you deserve</p><img className="accent_logo" src="/img/svg/denim.svg" alt="Логотип" width="205" height="70" />
                        <Link className="button" to={AppRoute.Catalog}>Check new collection</Link>
                    </div>
                </div>
                <div className="accent_footer">
                    <a className="accent_arrow-down" href="#scroll-down">
                        <img src="/img/svg/arrow-down.svg" alt="вниз" width="10" height="27" />
                    </a>
                    <div className="accent_social">
                        <a className="accent_social-link" href='https://www.instagram.com'>Instagram</a><a className="accent_social-link" href='https://www.facebook.com'>Facebook</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Accent };
