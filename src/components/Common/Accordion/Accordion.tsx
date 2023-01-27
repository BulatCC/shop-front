import { AccordionProps } from './Accordion.type';

const Accordion = ({ children }: AccordionProps): JSX.Element => {
    return (
        <ul className="accordion">
            <li className="accordion_item active">
                <div className="accordion_title-wrap">
                    <span className="accordion_title">Color</span>
                    <img className="accordion_icon" src="img/svg/arrow-down-accordion.svg" width="16" height="8" />
                </div>
                <div className="accordion_wrapper">
                    <div className="accordion_content">
                        <ul className="filter-radio">
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button" id="#B0C3C7" value="#B0C3C7" checked />
                                <label htmlFor="#B0C3C7" style={{ '--radio-color': '#B0C3C7' } as React.CSSProperties}></label>
                            </li>
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button" id="#3B6392" value="#3B6392" />
                                <label htmlFor="#3B6392" style={{ '--radio-color': '#3B6392' } as React.CSSProperties}></label>
                            </li>
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button" id="#2D2E2E" value="#2D2E2E" />
                                <label htmlFor="#2D2E2E" style={{ '--radio-color': '#2D2E2E' } as React.CSSProperties}></label>
                            </li>
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button" id="#ECECEC" value="#ECECEC" />
                                <label htmlFor="#ECECEC" style={{ '--radio-color': '#ECECEC' } as React.CSSProperties}></label>
                            </li>
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button" id="#4193DA" value="#4193DA" />
                                <label htmlFor="#4193DA" style={{ '--radio-color': '#4193DA' } as React.CSSProperties}></label>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="accordion_item active">
                <div className="accordion_title-wrap">
                    <span className="accordion_title">Collection</span>
                    <img className="accordion_icon" src="img/svg/arrow-down-accordion.svg" width="16" height="8" />
                </div>
                <div className="accordion_wrapper">
                    <div className="accordion_content">
                        <ul className="sort-buttons">
                            <li className="sort-buttons_item">
                                <button className="sort-buttons_button" type="button">Casual</button>
                            </li>
                            <li className="sort-buttons_item">
                                <button className="sort-buttons_button active" type="button">Petite</button>
                            </li>
                            <li className="sort-buttons_item">
                                <button className="sort-buttons_button" type="button">ClassNameic</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export { Accordion };
