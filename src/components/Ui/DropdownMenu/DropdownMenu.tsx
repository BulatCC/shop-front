import { DropdownMenuProps } from './DropdownMenu.type';

const DropdownMenu = ({ title, children }: DropdownMenuProps): JSX.Element => {
    return (
        <div className="dropdown-menu">
            <button className="dropdown-menu_dropdown" type="button">
                <span className="dropdown-menu_dropdown-title">{title}</span>
                <img className="dropdown-menu_icon" src="img/svg/arrow-down-accordion.svg" width="16" height="8" />
            </button>
            <div className="dropdown-menu_content">
                <div className="dropdown-menu_header">
                    <h3 className="dropdown-menu_title">{title}</h3>
                    <button className="dropdown-menu_button js-filter-close" type="button">Close</button>
                </div>
                {children}
                <div>
                    <button className="button" type="button">Apply (9 products)</button>
                    <button className="button button--white button--border-bottom" type="button">Clear all</button>
                </div>
            </div>
        </div>
    );
};

export { DropdownMenu };
