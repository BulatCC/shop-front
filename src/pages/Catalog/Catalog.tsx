import { useState, useEffect } from 'react';
import { HeadBlock } from '../../components/Ui/HeadBlock/HeadBlock';
import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { FilterContainer } from '../../components/Ui/FilterContainer/FilterContainer';
import { SortButtons } from '../../components/Common/SortButtons/SortButtons';
import { ProductList } from '../../components/Ui/ProductList/ProductList';
import { Pagination } from '../../components/Common/Pagination/Pagination';
import { mockCrumbsData } from '../../services/mocks';
import style from './Catalog.module.scss';
import { SortType } from '../../Consts';
import { API } from '../../services/api';
import { ProductCard } from '../../types/ProductCard';

const screenWidth = document.documentElement.clientWidth;
const sortData = [
    {
        name: SortType.Popular,
        selected: true
    },
    {
        name: SortType.HighToLow,
        selected: false
    },
    {
        name: SortType.LowToHigh,
        selected: false
    }
];

const Catalog = (): JSX.Element => {
    const [catalogData, setCatalogData] = useState<ProductCard[]>();
    useEffect(() => {
        API.getCatalogData()
            .then(data => setCatalogData(data as ProductCard[]))
            .catch(error => console.log(error));
    }, []);

    // типа ajax, надо допиливать
    // const clickHandler = () => {
    //     API.getCatalogData()
    //     .then(data => setCatalogData([...catalogData as ProductCard[], ...data as ProductCard[]]))
    // }

    return (
        <div className={style.catalog}>
            <div className={`${style.catalog_container} container`}>
                {screenWidth < 768 && <BreadCrumbs crumsbData={mockCrumbsData} classMod={style['catalog_bread-crumbs']} />}
            </div>
            <HeadBlock />
            <div className="container">
                <FilterContainer classMod={style['catalog_filter-container']} />
                <SortButtons data={sortData} classMod={style['catalog_sort-buttons']} />
                <section className="content">
                    <ProductList products={catalogData} skeletonNumber={9} classMod={style['catalog_product-list']} isCatalog />
                </section>
                <section className="content pd-7-descktop">
                    <Pagination />
                </section>
            </div>
        </div>
    );
};

export { Catalog };
