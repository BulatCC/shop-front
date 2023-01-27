const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_container">
                    <h2 className="footer_title">Nîmes</h2>
                    <nav className="footer_links">
                        <a className="footer_link" href="#">Shop</a>
                        <a className="footer_link" href="#">Delivery</a>
                        <a className="footer_link" href="#">Service</a>
                        <a className="footer_link" href="#">Contacts</a>
                    </nav>
                    <ul className="footer_social-list">
                        <li className="footer_social-item">
                            <a className="footer_social-link" href="#">
                                <img src="/img/svg/fb.svg" alt="facebook" width="10.5" height="20" />
                            </a>
                        </li>
                        <li className="footer_social-item">
                            <a className="footer_social-link" href="#">
                                <img src="/img/svg/instagram.svg" alt="instagram" width="20" height="20" />
                            </a>
                        </li>
                        <li className="footer_social-item">
                            <a className="footer_social-link" href="#">
                                <img src="/img/svg/pinterest.svg" alt="pinterest" width="20" height="20" />
                            </a>
                        </li>
                        <li className="footer_social-item">
                            <a className="footer_social-link" href="#">
                                <img src="/img/svg/twitter.svg" alt="twitter" width="20" height="20" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
