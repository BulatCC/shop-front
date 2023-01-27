import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { Accordion } from '../../Common/Accordion/Accordion';

const FilterCatalog = (): JSX.Element => {
    return (
        <DropdownMenu title='Filter by'>
            <Accordion />
        </DropdownMenu>
    );
};

export { FilterCatalog };
