import { NavProps } from './Nav.type';
import style from './Nav.module.scss';

const Nav = ({ data, classMod }: NavProps): JSX.Element => {
    return (
        <nav className={`${style.nav} ${classMod ?? ''}`}>
            {data.map(({ id, title, link }) => (
                <a className={style.nav_link} href={link} key={id}>{title}</a>
            ))}
        </nav>
    );
};

export { Nav };
