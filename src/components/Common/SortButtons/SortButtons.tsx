import { RadioButton as SortButtonsProps } from '../../../types/Radio';
import style from './SortButtons.module.scss';

const SortButtons = ({ data, name, onChange, checked, classMod }: SortButtonsProps): JSX.Element => {
    return (
        <ul className={`${style['sort-buttons']} ${classMod ?? ''}`}>
            {data.map(({ id, value }, i) => (
                <li key={value + i.toString()}>
                    <input
                        className={style['sort-buttons_button']}
                        type="radio"
                        name={name}
                        id={id}
                        value={value}
                        checked={value === checked}
                        onChange={onChange}
                    />
                    <label htmlFor={id}>{value}</label>
                </li>
            ))}
        </ul>
    );
};

export { SortButtons };
