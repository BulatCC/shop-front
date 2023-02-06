import { ButtonsChooseProps } from './ButtonsChoose.type';
import style from './ButtonsChoose.module.scss';

const ButtonsChoose = ({ classMod }: ButtonsChooseProps): JSX.Element => {
    return (
        <nav className={`${classMod ?? ''}`}>
            <ul className={style['buttons-choose_list']}>
                <li className={style['buttons-choose_item']}>
                    <a className={`${style['buttons-choose_link']} ${style['active']} `} href="#">Woman</a>
                </li>
                <li className={style['buttons-choose_item']}>
                    <a className={style['buttons-choose_link']} href="#">Man</a>
                </li>
            </ul>
        </nav>
    );
};

export { ButtonsChoose };
