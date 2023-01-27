import { SortButtons } from '../../Common/SortButtons/SortButtons';

const ProductDescription = (): JSX.Element => {
    return (
        <div className="product-details_description">
            <div className="product-details_container">
                <ul className="product-details_list">
                    <li className="product-details_item">
                        <h2 className="title product-details_title">Overalls</h2>
                        <p className="product-details_text">Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front and back pockets.</p>
                    </li>
                    <li className="product-details_item">
                        <h3 className="product-details_sub-title">Color</h3>
                        <ul className="filter-radio product-details_radio">
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button"
                                    id="#B0C3C7" value="#B0C3C7" checked />
                                <label htmlFor="#B0C3C7" style={{ '--radio-color': '#B0C3C7' } as React.CSSProperties}></label>
                            </li>
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button"
                                    id="#3B6392" value="#3B6392" />
                                <label htmlFor="#3B6392" style={{ '--radio-color': '#3B6392' } as React.CSSProperties}></label>
                            </li>
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button"
                                    id="#2D2E2E" value="#2D2E2E" />
                                <label htmlFor="#2D2E2E" style={{ '--radio-color': '#2D2E2E' } as React.CSSProperties}></label>
                            </li>
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button"
                                    id="#ECECEC" value="#ECECEC" />
                                <label htmlFor="#ECECEC" style={{ '--radio-color': '#ECECEC' } as React.CSSProperties}></label>
                            </li>
                            <li className="filter-radio_item">
                                <input className="filter-radio_button" type="radio" name="color-button"
                                    id="#4193DA" value="#4193DA" />
                                <label htmlFor="#4193DA" style={{ '--radio-color': '#4193DA' } as React.CSSProperties}></label>
                            </li>
                        </ul>
                    </li>
                    <li className="product-details_item">
                        <h3 className="product-details_sub-title">Size</h3>
                        <SortButtons />
                    </li>
                </ul>
                <p className="product-details_price">$ 160</p>
                <button className="button product-details_button" type="button">Add to cart</button>
            </div>
        </div>
    );
};

export { ProductDescription };
