import { ProductCard } from '../../Common/ProductCard/ProductCard/ProductCard';
import { ProductListProps } from './ProductList.types';
import style from './ProductList.module.scss';
import { ProductCardSkeleton } from '../../Common/ProductCard/ProductCardSkeleton/ProductCardSkeleton';

const BIG_IMAGE_INDEX = 4;

const addClass = (index: number): boolean | string => {
    if (index === BIG_IMAGE_INDEX) {
        return true;
    }
    return '';
};

const ProductList = ({ products, classMod, isCatalog, skeletonNumber }: ProductListProps): JSX.Element => {
    const renderProductList = (): JSX.Element[] => {
        if (products) {
            return (
                products.map((product, i) => (
                    <li key={product.id} className={`${addClass(i) ? style['product-list_item--big'] : ''}`} >
                        <ProductCard productCardData={product} isBig={addClass(i)} isCatalog={isCatalog} />
                    </li>
                ))
            );
        };

        const skeletonLoaderData = Array.from(Array(skeletonNumber), (_, i) => i);
        return (
            skeletonLoaderData.map((_, i) => (
                <li key={i} className={`${addClass(i) ? style['product-list_item--big'] : ''}`} >
                    <ProductCardSkeleton isCatalog={isCatalog} />
                </li>
            ))
        );
    };

    return (
        <ul className={`${style['product-list']} ${classMod ?? ''}`}>
            {renderProductList()}
        </ul>
    );
};

export { ProductList };
