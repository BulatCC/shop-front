import { ProductCard } from '../../Common/ProductCard/ProductCard';
import { ProductListProps } from './ProductList.types';

const ProductList = ({ products, classMod }: ProductListProps): JSX.Element => {
    return (

        <ul className={`product-list ${classMod ?? ''}`}>
            {products.map((product) => (
                <li key={product.id} className="product-list_item">
                    <ProductCard productCardData={product} />
                </li>
            ))}
        </ul>
    );
};

export { ProductList };
