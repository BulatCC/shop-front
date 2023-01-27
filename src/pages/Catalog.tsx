import { HeadBlock } from '../components/Ui/HeadBlock/HeadBlock';
import { BreadCrumbs } from '../components/Common/BreadCrumbs/BreadCrumbs';
import { FilterCatalog } from '../components/Ui/FilterCatalog/FilterCatalog';
import { ButtonsChoose } from '../components/Common/ButtonsChoose/ButtonsChoose';
import { SortButtons } from '../components/Common/SortButtons/SortButtons';
import { ProductList } from '../components/Ui/ProductList/ProductList';
import { Pagination } from '../components/Common/Pagination/Pagination';
import { jacketsCatalog, mockCrumbsData } from '../api/mocks';

const Catalog = (): JSX.Element => {
    return (
        <>
            <div className="container mt-2-mobile mt-0-tablet">
                <BreadCrumbs crumsbData={mockCrumbsData} classMod='hidden-tablet' />
            </div>
            <HeadBlock />
            <div className="container">
                <div className="filter-container mb-3">
                    <FilterCatalog />
                    <ButtonsChoose />
                </div>
                <SortButtons classMod='mb-3' />
                <section className="content">
                    <ProductList products={jacketsCatalog} classMod='product-list--catalog' />
                </section>
                <section className="content pd-7-descktop">
                    <Pagination />
                </section>
            </div>
        </>
    );
};

export { Catalog };
