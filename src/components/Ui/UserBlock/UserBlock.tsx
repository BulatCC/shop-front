import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { UserBlockProps } from './UserBlock.types';
import { AppRoute } from '../../../Consts';

const UserBlock = ({ classMod }: UserBlockProps): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const handleSearchShow = (evt: MouseEvent<HTMLButtonElement>): void => {
        evt.stopPropagation();
        setSearchActive(true);
    };

    useEffect(() => {
        const handleClick = (evt: Event): void => {
            if (searchActive && evt.target !== inputRef.current) {
                setSearchActive(false);
            }
        };

        const handleEscPress = (evt: KeyboardEvent): void => {
            if (evt.key === 'Escape' && searchActive) {
                setSearchActive(false);
            }
        };

        if (searchActive) {
            document.addEventListener('click', handleClick);
            document.addEventListener('keydown', handleEscPress);
        }

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleEscPress);
        };
    }, [searchActive]);

    return (
        <div className={`user-block ${classMod ?? ''}`}>
            <ul className="user-block_list">
                <li className="user-block_list-item">
                    <div className={`search-block ${searchActive ? 'active' : ''}`}>
                        <input className="search-block_input input-field" type="search" ref={inputRef} />
                        <button className="search-block_button" type="button" onClick={handleSearchShow}>
                            <img className="search-block_img" src="/img/svg/search.svg" alt="поиск" width="24" height="24" />
                        </button>
                    </div>
                </li>
                <li className="user-block_list-item">
                    <Link className="user-block_item" to={AppRoute.Login}>
                        <img className="user-block_img" src="/img/svg/person.svg" alt="Login" width="24" height="24" />
                    </Link>
                </li>
                <li className="user-block_list-item">
                    <Link className="user-block_item" to={AppRoute.Cart}>
                        <span className="user-block_cart-count">0</span>
                        <img className="user-block_img" src="/img/svg/cart.svg" alt="корзина" width="24" height="24" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export { UserBlock };
