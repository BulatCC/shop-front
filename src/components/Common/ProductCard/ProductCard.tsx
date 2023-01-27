import { Link } from 'react-router-dom';
import { ProductCardProps } from './ProductCard.types';
import { Img } from '../Img/Img';
import { AppRoute } from '../../../Consts';

const ProductCard = ({ productCardData: { link, img, title, price } }: ProductCardProps): JSX.Element => {
    const route = `${AppRoute.Catalog}/${link}`;
    return (
        <article className="product-card">
            <Link to={route}>
                <div className="product-card_img-wrap">
                    <Img imgPath={img} className='product-card_img' altText={title}/>
                </div>
                <h3 className="product-card_title">{title}</h3>
                <br />
                <span className="product-card_price">$ {price}</span>
            </Link>
        </article>

    );
};

export { ProductCard };
