import { Accent } from '../components/Ui/Accent/Accent';
import { ProductsPreviewList } from '../components/Ui/ProductsPreviewList/ProductsPreviewList';
import { Banner } from '../components//Ui/Banner/Banner';
import { AppRoute } from '../Consts';

import { bestSellers, jeans, overalls, jackets, shirts } from '../api/mocks';

const Main = (): JSX.Element => {
    return (
        <>
            <Accent />
            <ProductsPreviewList title='Bestsellers' link={'#'} products={bestSellers} anchor='scroll-down' />
            <ProductsPreviewList title='Jeans' link={'#'} products={jeans} />
            <ProductsPreviewList title='Overalls' link={'#'} products={overalls} />
            <Banner link={AppRoute.Catalog} imgPath='banner' title='Fall 2023' text='Street fashion collection' />
            <ProductsPreviewList title='Jackets' link={'#'} products={jackets} />
            <ProductsPreviewList title='Shirts' link={'#'} products={shirts} />
        </>
    );
};

export { Main };
