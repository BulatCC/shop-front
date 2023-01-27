import { SortButtonsProps } from './SortButtons.type';

const SortButtons = ({ classMod }: SortButtonsProps): JSX.Element => {
    return (
        <ul className={`sort-buttons ${classMod ?? ''}`}>
            <li className="sort-buttons_item">
                <button className="sort-buttons_button active" type="button">Popular</button>
            </li>
            <li className="sort-buttons_item">
                <button className="sort-buttons_button" type="button">Low to high</button>
            </li>
            <li className="sort-buttons_item">
                <button className="sort-buttons_button" type="button">High to low</button>
            </li>
        </ul>
    );
};

export { SortButtons };
