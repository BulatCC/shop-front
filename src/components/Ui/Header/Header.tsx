import { useLocation, Link } from 'react-router-dom';
import { UserBlock } from '../UserBlock/UserBlock';
import { AppRoute } from '../../../Consts';

const Header = (): JSX.Element => {
    const { pathname } = useLocation();
    const isPageMain = pathname === '/' && true;

    return (
        <header className="header">
            <div className="container">
                <div className={`header_container ${isPageMain
                    ? 'header_container--main'
                    : ''} `}>
                    {isPageMain
                        ? <span className="header_title">Nîmes</span>
                        : <Link className="header_title" to={AppRoute.Root}>Nîmes</Link>}
                    {!isPageMain && <UserBlock />}
                </div>
            </div>
        </header>
    );
};

export { Header };
