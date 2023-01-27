import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { Catalog } from './pages/Catalog';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Layout } from './components/Layout';
import { AppRoute } from './Consts';
import { useScrollTop } from './hooks/UseScrollTop';

const App = (): JSX.Element => {
    useScrollTop();
    return (
        <Routes>
            <Route path={AppRoute.Root} element={<Layout />}>
                <Route index element={<Main />} />
                <Route path={AppRoute.Catalog}>
                    <Route path={AppRoute.ProductId} element={<Product />} />
                    <Route path="" element={<Catalog />} />
                </Route>
                <Route path={AppRoute.Login} element={<Login />} />
                <Route path={AppRoute.Cart} element={<Cart />} />
            </Route>
        </Routes>

    );
};

export { App };
