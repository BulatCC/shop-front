import { FilterCatalog } from '../../Ui/FilterCatalog/FilterCatalog';
import { ButtonsChoose } from '../../Common/ButtonsChoose/ButtonsChoose';
import { FilterContainerProps } from './FilterContainer.type';
import style from './FilterContainer.module.scss';

const FilterContainer = ({ classMod }: FilterContainerProps): JSX.Element => {
    return (
        <div className={`${style['filter-container']} ${classMod ?? ''}`}>
            <FilterCatalog classMod={style['filter-container_dropdown-menu']} />
            <ButtonsChoose classMod={style['filter-container_buttons-choose']}/>
        </div>
    );
};

export { FilterContainer };
