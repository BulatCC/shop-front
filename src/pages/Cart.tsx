import { ProductsPreviewList } from '../components/Ui/ProductsPreviewList/ProductsPreviewList';
import { Img } from '../components/Common/Img/Img';

import { jackets } from '../api/mocks';

const Cart = (): JSX.Element => {
    return (
        <>
            <section className="content mt-3 mt-6-descktop">
                <div className="container">
                    <div className="title-container">
                        <h1 className="title">Cart</h1>
                    </div>
                    <div className="cart">
                        <div className="cart_wrap">
                            <article className="product-card-cart">
                                <a href="#">
                                    <Img imgPath='woman-jacket-1' altText='jacket' className='product-card-cart_img' width="11" height="130" />
                                </a>
                                <div className="product-card-cart_description"><a className="product-card-cart_title" href="#">Jacket</a><span className="product-card-cart_text">Color: white</span><span className="product-card-cart_text">Size: S</span><span className="product-card-cart_price">$ 20</span></div>
                                <button className="close-button product-card-cart_button">удалить</button>
                            </article>
                            <article className="product-card-cart">
                                <a href="#">
                                    <Img imgPath='woman-jacket-2' altText='jacket' className='product-card-cart_img' width="11" height="130" />
                                </a>
                                <div className="product-card-cart_description"><a className="product-card-cart_title" href="#">Jacket</a><span className="product-card-cart_text">Color: white</span><span className="product-card-cart_text">Size: S</span><span className="product-card-cart_price">$ 40</span></div>
                                <button className="close-button product-card-cart_button">удалить</button>
                            </article>
                            <article className="product-card-cart">
                                <a href="#">
                                    <Img imgPath='woman-jacket-3' altText='jacket' className='product-card-cart_img' width="11" height="130" />
                                </a>
                                <div className="product-card-cart_description"><a className="product-card-cart_title" href="#">Jacket</a><span className="product-card-cart_text">Color: white</span><span className="product-card-cart_text">Size: S</span><span className="product-card-cart_price">$ 60</span></div>
                                <button className="close-button product-card-cart_button">удалить</button>
                            </article>
                        </div>
                        <div className="total mt-3 mt-0-tablet">
                            <div className="total_amount"><span>Total:</span><span>$ 120</span></div>
                            <button className="button total_button">Buy</button>
                        </div>
                    </div>
                </div>
            </section>
            <ProductsPreviewList title='You may also like' link={'#'} products={jackets} />
        </>

    );
};

export { Cart };
