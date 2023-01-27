import { ProductsPreviewListProps } from './ProductsPreviewList.type';
import { ProductList } from '../ProductList/ProductList';

const ProductsPreviewList = ({ title, link, products, anchor }: ProductsPreviewListProps): JSX.Element => {
    return (
        <section className="content" id={anchor}>
            <div className="container">
                <div className="title-container">
                    <h2 className="title">{title}</h2>
                    <a className="link hidden-mobile" href={link}>View all</a>
                </div>
                <ProductList products={products} />
                <div className="hidden-tablet link-container"><a className="link" href={link}>View all</a></div>
            </div>
        </section>
    );
};

export { ProductsPreviewList };
