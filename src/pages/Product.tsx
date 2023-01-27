import { ProductSlider } from '../components/Ui/ProductSlider/ProductSlider';
import { ProductDescription } from '../components/Ui/ProductDescription/ProductDescription';
import { ProductsPreviewList } from '../components/Ui/ProductsPreviewList/ProductsPreviewList';

import { jackets } from '../api/mocks';

const Product = (): JSX.Element => {
    return (
        <>
            <section className="product-details content mt-2-mobile mt-4-tablet mt-6-descktop">
                <div className="product-details_container">
                    <ProductSlider />
                </div>
                <ProductDescription />
            </section>
            <ProductsPreviewList title='You may also like' link={'#'} products={jackets} />
        </>
    );
};

export { Product };
